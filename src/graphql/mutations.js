/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReadings = /* GraphQL */ `
  mutation CreateReadings(
    $input: CreateReadingsInput!
    $condition: ModelReadingsConditionInput
  ) {
    createReadings(input: $input, condition: $condition) {
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
export const updateReadings = /* GraphQL */ `
  mutation UpdateReadings(
    $input: UpdateReadingsInput!
    $condition: ModelReadingsConditionInput
  ) {
    updateReadings(input: $input, condition: $condition) {
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
export const deleteReadings = /* GraphQL */ `
  mutation DeleteReadings(
    $input: DeleteReadingsInput!
    $condition: ModelReadingsConditionInput
  ) {
    deleteReadings(input: $input, condition: $condition) {
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
