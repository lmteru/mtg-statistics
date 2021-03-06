import { MagicCard } from './MagicCard';
export interface MagicCard{
artist?: string,
cmc?: number,
colorIdentity?:string[],
colors?: string[],
flavor?: string,
foreignNames?: any[],
id?: string,
layout?: string,
legalities?: any[],
manaCost?: string,
name?: string,
number?: number,
printings?: string[],
rarity?: string,
releaseDate?: string,
rulings?: any[],
set?: string,
setName?: string,
source?: string,
text?: string,
type?: string,
types?: string[],
imageUrl?: string
}

export interface MagicDeck{
  card?: MagicCard,
  qntd?: number
}
