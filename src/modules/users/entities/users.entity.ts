import { UserRolesEntity } from 'src/modules/roles/entities';
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER',
}

@Entity({
  name: 'users',
  // orderBy: {
  //   createdAt: 'ASC',  // ascending
  // },
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  numberOfUniqueViews: string;

  @Column({ type: 'text', unique: true, nullable: true })
  nickname: string;

  @Column({ type: 'text', nullable: true })
  firstName: string;

  @Column({ type: 'text', nullable: true })
  lastName: string;

  @Column({ type: 'text', unique: true, nullable: true })
  email: string;

  // @Exclude()
  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  linkResetPassword: string;

  // @Column({ default: false })
  // linkForPasswordActivated: boolean;

  // @ApiModelProperty({ description: 'The search location of the User' })
  // @Column()
  // searchIn: Position;

  @Column({ default: false })
  registered: boolean;

  @Column({ default: false })
  isActivated: boolean;

  // @Column({ default: null })
  // facebookId: string;

  // @Column({ default: null })
  // googleId: string;

  // @Column({ default: null })
  // vkontakteId: string;

  // @Column({ default: null })
  // mailruId: string;

  // @Column({ default: null })
  // odnoklassnikiId: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ default: null })
  gender: string;

  @Column({ nullable: true })
  activationLink: string;

  @Column({ default: false })
  banned: boolean;

  @Column({ nullable: true })
  banReason: string;

  @CreateDateColumn({
    name: 'creation_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @OneToMany(() => UserRolesEntity, (userRolesEntity: UserRolesEntity) => userRolesEntity.user)
  public userRolesEntity!: UserRolesEntity[];

  // @ManyToMany(type => Roles, {
  //   cascade: true, // using cascades to automatically save related objects
  // })
  // @JoinTable()
  // public roles: Roles[];
}
