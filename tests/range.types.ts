import {
  findMaxSatisfying,
  findMinimumForRange,
  findMinSatisfying,
  isGreaterThanRange,
  isLessThanRange,
  isOutsideRange,
  isRangeSubset,
  isValidRange,
  normalizeRange,
  parseRange,
  rangesIntersect,
  rangeToComparators,
  satisfies,
  simplifyRange,
  tryParseRange,
  type RangeOptions,
  type SemVerRange,
} from '../src/index.ts'

declare const options: RangeOptions
declare const parsed: SemVerRange
declare const versions: readonly string[]

parseRange(parsed)
tryParseRange(parsed)
isValidRange(parsed)
normalizeRange(parsed)
satisfies('1.0.0', parsed)
rangeToComparators(parsed)
findMaxSatisfying(versions, parsed)
findMinSatisfying(versions, parsed)
findMinimumForRange(parsed)
isOutsideRange('1.0.0', parsed, '>')
isGreaterThanRange('1.0.0', parsed)
isLessThanRange('1.0.0', parsed)
rangesIntersect(parsed, '1.x')
simplifyRange(versions, parsed)
isRangeSubset(parsed, '1.x')

// @ts-expect-error A parsed range already contains its parsing options.
parseRange(parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
tryParseRange(parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
isValidRange(parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
normalizeRange(parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
satisfies('1.0.0', parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
rangeToComparators(parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
findMaxSatisfying(versions, parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
findMinSatisfying(versions, parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
findMinimumForRange(parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
isOutsideRange('1.0.0', parsed, '>', options)
// @ts-expect-error A parsed range already contains its parsing options.
isGreaterThanRange('1.0.0', parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
isLessThanRange('1.0.0', parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
rangesIntersect(parsed, '1.x', options)
// @ts-expect-error A parsed range already contains its parsing options.
simplifyRange(versions, parsed, options)
// @ts-expect-error A parsed range already contains its parsing options.
isRangeSubset(parsed, '1.x', options)
