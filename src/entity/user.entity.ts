import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Users {
    @PrimaryColumn()
    name!: string

    @Column()
    github_id!: string

    @Column()
    company_id!: string

    @Column({nullable: true})
    company_github_id?: string

    @Column()
    team_name!: string
}