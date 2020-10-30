export type Faction = 'rebel' | 'imperial'

export type Keyword = 'counter' | 'heavy' | 'rogue'

export type ObjectiveSet = 'navigation' | 'defense' | 'assault'
export type UpgradeSet =
  | 'title'
  | 'turbolasers'
  | 'ion-cannons'
  | 'ordnance'
  | 'experimental-retrofit'
  | 'defensive-retrofit'
  | 'offensive-retrofit'
  | 'weapons-team'
  | 'fleet-support'
  | 'fleet-command'
  | 'support-team'
  | 'officer'
  | 'commander'
export type Size = 'small' | 'medium' | 'large' | 'huge'

export interface Card {
  id: number
  title: string
  image: string
}

export interface ObjectiveCard extends Card {
  set: ObjectiveSet
}

interface SharedShipSquadron extends Card {
  type: string
  points: number
  faction: Faction
}

export interface Squadron extends SharedShipSquadron {
  keywords: Keyword[]
  set: 'squadron'
}

export interface Upgrade {
  id: number
  title: string
  image: string
  set: UpgradeSet
  points: number
  faction?: Faction
  unique?: boolean
  dual?: boolean
  modification?: boolean
  shipsAllowedOn?: {
    [key: string]: boolean
  }
}

export interface Ship extends SharedShipSquadron {
  set: 'ship'
  size: Size
  dual?: boolean
  upgrades: { [key: string]: Upgrade | null }
}

export interface Divider {
  divider: true
}
