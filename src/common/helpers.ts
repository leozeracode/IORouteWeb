export const makeUrl = (url: string): string => {
  const prefix = 'api/v1'
  return `${process.env.NEXT_PUBLIC_API_URL}/${prefix}/${url}`
}
