import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Locus } from '../locus/locus.entity';

@Entity({
  name: 'rnc_locus_members',
})
export class LocusMember {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: bigint;

  @Column({ name: 'locus_id' })
  locusId: number;

  @Column({ name: 'urs_taxid' })
  ursTaxId: string;

  @Column({ name: 'region_id' })
  regionId: number;

  @Column({ name: 'membership_status' })
  membershipStatus: string;

  @ManyToOne(() => Locus, (locus) => locus.members)
  @JoinColumn({ name: 'locus_id' })
  locus: Locus;
}
