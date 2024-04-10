import { Percentage } from '../Percentage';

export class Index {
  constructor(
    public name: string,
    public factsheet: string,
    public markets: string,
    public sizes: string[],
    public percentageOfTotalMarketCapitalization: Percentage,
    public weighting: string | undefined
  ) {}

  public describe(): string {
    let markets = this.markets;
    let sizes = this.sizes;

    if (markets === 'developed' || markets === 'emerging') {
      markets += ' markets';
    }

    if (
      sizes.includes('large') &&
      sizes.includes('mid') &&
      sizes.includes('small')
    ) {
      sizes = ['all'];
    }

    const weighting = this.weighting === 'equal' ? ' equal weighted' : '';

    return markets + ' ' + sizes.join(' & ') + ' cap' + weighting;
  }
}
