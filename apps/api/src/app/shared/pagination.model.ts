import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsPositive, Min } from "class-validator";

export class Pagination<T = unknown> {
  public hasMoreElements: boolean;

  constructor(
    public data: T[],
    public page: number,
    public total: number,
    public pageSize: number
  ) {
    this.hasMoreElements = page * pageSize <= total;
  }
}

export class PaginationRequest {
  @ApiProperty() @IsOptional() @IsPositive() pageSize: number;
  @ApiProperty() @IsOptional() @Min(0) page: number;
}
