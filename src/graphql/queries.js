/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReadings = /* GraphQL */ `
  query GetReadings($email: String!, $readingTs: String!) {
    getReadings(email: $email, readingTs: $readingTs) {
      email
      readingTs
      sbp
      dbp
      heartRate
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listReadings = /* GraphQL */ `
  query ListReadings(
    $email: String
    $readingTs: ModelStringKeyConditionInput
    $filter: ModelReadingsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReadings(
      email: $email
      readingTs: $readingTs
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        readingTs
        sbp
        dbp
        heartRate
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
