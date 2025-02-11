import file from './xml/file';

export default (data: any, options: any = {}): any => {
  const aTestExecution = [{_attr: {version: '1'}}]
  const testResults = data.testResults.map((result: any) => { return file(result, options.relativePaths) })

  return options?.formatForSonar56
    ? { unitTest: aTestExecution.concat(testResults) }
    : { testExecutions: aTestExecution.concat(testResults) };
}