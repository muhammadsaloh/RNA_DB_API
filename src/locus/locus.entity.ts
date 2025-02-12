import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LocusMember } from '../locusMember/locusMember.entity';

@Entity({
  name: 'rnc_locus',
})
export class Locus {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'assembly_id' })
  assemblyId: string;

  @Column({ name: 'locus_name' })
  locusName: string;

  @Column({ name: 'public_locus_name' })
  publicLocusName: string;

  @Column({ type: 'text' })
  chromosome: string;

  @Column({ type: 'text' })
  strand: string;

  @Column({ name: 'locus_start' })
  locusStart: number;

  @Column({ name: 'locus_stop' })
  locusStop: number;

  @Column({ name: 'member_count' })
  memberCount: number;

  @OneToMany(() => LocusMember, (member) => member.locus)
  members: LocusMember[];
}
