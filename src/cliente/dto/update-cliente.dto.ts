import { IsOptional } from "class-validator";

export class UpdateClienteDto {
    @IsOptional()
    nome?: string;
  
    @IsOptional()
    email?: string;
  
    @IsOptional()
    telefone?: string;

    @IsOptional()
    cpf?: string;
  }