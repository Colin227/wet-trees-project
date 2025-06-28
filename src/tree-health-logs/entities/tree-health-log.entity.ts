import { Tree } from "src/trees/entities/tree.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class TreeHealthLog {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column()
  status: string;

  @Column({ nullable: true })
  notes?: string;

  @ManyToOne(() => Tree, (tree) => tree.healthLogs, { onDelete: 'CASCADE' })
  tree: Tree;
}