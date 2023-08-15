import { DataType } from 'sequelize';
import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  Length,
  ForeignKey,
  BelongsTo,
  HasMany,
  AutoIncrement,
  Unique,
} from 'sequelize-typescript';
import { Role } from './role.entity';

export class User extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    user_id: number

    @Unique
    @Column
    username: string

    @Column
    password: string

    @ForeignKey(() => Role)
    @Column
    role_id: number

    @BelongsTo(() => Role)
    roles: Role

    @CreatedAt
    created_at: Date

    @UpdatedAt
    updated_at: Date
    
}