import { UpgradeSet } from '../interfaces/cards'

type UpgradeMapForDisplayText = {
  [key in UpgradeSet]: string
}

export const upgradeMapForDisplayText: UpgradeMapForDisplayText = {
  commander: 'Commander',
  title: 'Title',
  turbolasers: 'Turbolasers',
  'ion-cannons': 'Ion Cannons',
  ordnance: 'Ordnance',
  'experimental-retrofit': 'Exp Retrofit',
  'defensive-retrofit': 'Def Retrofit',
  'offensive-retrofit': 'Off Retrofit',
  'weapons-team': 'Weapons Team',
  'fleet-support': 'Fleet Support',
  'fleet-command': 'Fleet Command',
  'support-team': 'Support Team',
  officer: 'Officer',
}
