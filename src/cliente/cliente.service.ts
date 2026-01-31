import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cliente } from "./cliente.entity";
import { Repository } from "typeorm";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
import { CreateClienteDto } from "./dto/create-cliente.dto";

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private repo: Repository<Cliente>,
  ) {}

  create(dto: CreateClienteDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateClienteDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}