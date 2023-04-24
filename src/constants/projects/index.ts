import { asylumTix } from './asylumtix';
import { catalyticDatabase } from './catalytic-database';
import { ensaConnect } from './ensa-connect';
import { schoonect } from './schoonect';
import { socialMedia } from './social-media';

export * from './project';

export const projects = [ensaConnect, catalyticDatabase, schoonect, asylumTix, socialMedia];
