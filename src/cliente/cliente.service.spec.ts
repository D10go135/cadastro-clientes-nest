import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from './cliente.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';

describe('ClienteService', () => {
  let service: ClienteService;

  const mockRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClienteService,
        {
          provide: getRepositoryToken(Cliente),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ClienteService>(ClienteService);
  });

  it('deve criar um cliente', async () => {
    const cliente = { nome: 'João' };
    mockRepository.save.mockResolvedValue(cliente);

    const result = await service.create(cliente as any);

    expect(result).toEqual(cliente);
    expect(mockRepository.save).toHaveBeenCalled();
  });

  it('deve listar clientes', async () => {
    mockRepository.find.mockResolvedValue([]);

    const result = await service.findAll();

    expect(result).toEqual([]);
  });

  it('deve atualizar cliente', async () => {
    mockRepository.update.mockResolvedValue({ affected: 1 });
  
    const result = await service.update(1, { nome: 'Jonas' });
  
    expect(mockRepository.update).toHaveBeenCalledWith(1, {
      nome: 'Jonas',
    });
  
    expect(result.affected).toBe(1);
  });

  it('deve deletar cliente', async () => {
    mockRepository.delete.mockResolvedValue({ affected: 1 });
  
    const result = await service.remove(1);
  
    expect(mockRepository.delete).toHaveBeenCalledWith(1);
    expect(result.affected).toBe(1);
  });

  
});
