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
} from 'sequelize-typescript';
import { User } from './user.entity';

@Table
export class Role extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    role_id: number

    @Column
    role_name: string

    @CreatedAt
    created_at: Date

    @UpdatedAt
    updated_at: Date

    @HasMany(() => User, "role_id")
    users: User[]

}