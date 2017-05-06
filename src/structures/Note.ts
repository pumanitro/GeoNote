/**
 * Created by puman on 06.05.2017.
 */

import { User } from 'User';

export class Note{
  title:string;
  content:string;
  author = new User();
  remainingUses:number;
  maxUses:number;

  constructor(){
  }
}
