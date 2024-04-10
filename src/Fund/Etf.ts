import { Index } from '../Index/Index';
import { Percentage } from '../Percentage';
import type { Fund } from './Fund';

export class Etf implements Fund {
  constructor(
    private name: string,
    private symbol: string,
    private isin: string,
    private logo: string,
    private totalExpenseRatio: Percentage,
    private internalTransactionCosts: Percentage,
    private dividendLeak: Percentage,
    private index: Index,
    private kiid: string,
    private factsheet: string
  ) {}

  getName(): string {
    return this.name;
  }

  getIdentifier(): string {
    return this.symbol;
  }

  getIsin(): string {
    return this.isin;
  }

  getLogo(): string {
    return this.logo;
  }

  getTotalExpenseRatio(): Percentage {
    return this.totalExpenseRatio;
  }

  getInternalTransactionCosts(): Percentage {
    return this.internalTransactionCosts;
  }

  getDividendLeak(): Percentage {
    return this.dividendLeak;
  }

  getTrackedIndex(): Index {
    return this.index;
  }

  getKiid(): string {
    return this.kiid;
  }

  getFactsheet(): string {
    return this.factsheet;
  }

  getMarketCapitalization(): Percentage {
    return this.index.percentageOfTotalMarketCapitalization;
  }

  getEsgExclusions(): Percentage {
    return new Percentage(0);
  }

  containsSmallCaps(): boolean {
    return this.index.sizes.includes('small');
  }
}
