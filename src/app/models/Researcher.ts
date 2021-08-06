import {Byte} from "@angular/compiler/src/util";

export class Researcher{
  firstname: string;
  lastname: string;
  researcherId: bigint;
  email: string;
  country: string;
  state: string;
  industryId: number;
  shortDescription: string;
  discipline: string;
  specialty: string;
  twitter: string;
  linkedin: string;
  facebook: string;
  profilePix: Byte[];
  profileImage: Byte[];
  backdropImage: Byte[];
  status: number;
  username: string;
  password: string;
  followerResearherStatus: number;
  tags: string;
}
