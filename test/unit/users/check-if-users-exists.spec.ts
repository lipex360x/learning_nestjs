import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/modules/users/application/dtos';
import { CheckIfUserExistsHandle } from 'src/modules/users/application/handlers/check-if-user-exists.handle';
import { User } from 'src/modules/users/infra/database/typeorm/entities';
import { Repository } from 'typeorm';

describe('Check if user exists handle', () => {
  let sut: CheckIfUserExistsHandle;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CheckIfUserExistsHandle,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    sut = module.get<CheckIfUserExistsHandle>(CheckIfUserExistsHandle);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Success cases', () => {
    test('It should return data', async () => {
      // arrange
      const payload = {
        name: 'test',
        email: 'test@test.com',
        password: 'password',
      } as CreateUserDto;

      const spySutHandle = jest.spyOn(sut, 'handle');

      jest.spyOn(repository, 'findOne').mockResolvedValue(null);

      // act
      const sutResponse = await sut.handle(payload);

      // assert
      expect(sutResponse).toEqual(payload);
      expect(spySutHandle).toHaveBeenCalledTimes(1);
      expect(spySutHandle).toHaveBeenCalledWith(payload);
    });
  });

  describe('Error cases', () => {
    test('It should throw error email not provided', async () => {
      // arrange
      const payloadWithoutEmail = {
        name: 'test',
        password: 'password',
      } as CreateUserDto;

      const spySutHandle = jest.spyOn(sut, 'handle');

      // act
      const sutRequest = () => sut.handle(payloadWithoutEmail);

      // assert
      await expect(() => sutRequest()).rejects.toThrow(
        new BadRequestException('email is required'),
      );
      expect(spySutHandle).toHaveBeenCalledTimes(1);
      expect(spySutHandle).toHaveBeenCalledWith(payloadWithoutEmail);
    });

    test('It should throw error email already exists', async () => {
      // arrange
      const payload = {
        name: 'test',
        email: 'test@test.com',
        password: 'password',
      } as CreateUserDto;

      const repositoryResponse = { email: 'test@test.com' };

      const spySutHandle = jest.spyOn(sut, 'handle');

      jest
        .spyOn(repository, 'findOne')
        .mockResolvedValue(repositoryResponse as User);

      // act
      const sutRequest = () => sut.handle(payload);

      // assert
      await expect(() => sutRequest()).rejects.toThrow(
        new BadRequestException('email is already exists'),
      );
      expect(spySutHandle).toHaveBeenCalledTimes(1);
      expect(spySutHandle).toHaveBeenCalledWith(payload);
    });
  });
});
