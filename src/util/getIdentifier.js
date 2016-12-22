import * as t from 'babel-types'

const findVariableDeclarator = path => path.findParent(parentPath => parentPath.isVariableDeclarator())

const getName = ({ node: { id: { name } } }) => name

const getClassIdentifier = path => {

}

const getFunctionIdentifier = path => {
  if (t.isFunctionDeclaration(path)) return getName(path)
  if (t.isArrowFunctionExpression(path) || t.isFunctionExpression(path)) return getName(findVariableDeclarator(path))

  throw path.buildCodeFrameError('`path` is unsupported Function definition')
}

const getIdentifier = path => {
  if (t.isClass(path)) return getClassIdentifier(path)
  if (t.isFunction(path)) return getFunctionIdentifier(path)

  throw path.buildCodeFrameError('`path` must be Class or Function definition')
}

export default getIdentifier