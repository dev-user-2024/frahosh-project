import './index.css';
import Homepage from "./Homepage";
import {useState} from "react";
import calculations from './Utilities/calculations.js'
import {changeElement, addRowToMatrix, removeRowFromMatrix, addColumnToMatrix, removeColumnFromMatrix} from './Utilities/definitionSectionFunctions'

function Matrix() {
  const initialMatrixDefinitions =
      {
        "definedMatrices":[
          {
            "id": 0,
            "name":"A",
            "rowDimension": 2,
            "columnDimension": 2,
            "matrixElements" : [
                [2, 3], //  matrixElements[0] = [1, 0];  matrixElements[0] = [1, 0] + [0]
                [1, 5]
            ]
          },
          {
            "id": 1,
            "name":"B",
            "rowDimension":2,
            "columnDimension": 2,
            "matrixElements" : [
              [5, 5], //  matrixElements[0] = [1, 0];  matrixElements[0] = [1, 0] + [0]
              [5, 5]
            ]
          }
        ],
      };

  const [applicationData, setApplicationData] = useState(initialMatrixDefinitions); //  defined matrices state
  const [expressionText, setExpressionText] = useState("I"); //  defined matrices state
  const [resultMatrix, setResultMatrix] = useState([[]]) //  result state
  const [parseError, setParseError] = useState("")


  const {add} = calculations
  const {subtract} = calculations
  const {multiplyMatrices} = calculations
  const {inverse} = calculations
  const {determinant} = calculations
  const {transpose} = calculations
  const {dotProduct} = calculations

  const addition = function () {
    calculate(
        "",
        add,
        buildExpressionText("AB", "+", "")
    )
  }

  const subtraction = function () {
    calculate(
        "",
        subtract,
        buildExpressionText("AB", "-", "")
    )
  }

  const calculateDot = function () {
    calculate(
        "",
        dotProduct,
        buildExpressionText("AB", "dot", "")
    )
  }

  const multiplication = function () {
    calculate(
        "",
        multiplyMatrices,
        buildExpressionText("AB", "*", "")
    )
  }

  const inverseMatrix = function (matrixName) {
    calculate(
        matrixName,
        inverse,
        buildExpressionText("S", "inv", matrixName)
    )
  }

  const calculateDeterminant = function (matrixName) {
    calculate(
        matrixName,
        determinant,
        buildExpressionText("S", "det", matrixName)
    )
  }

  const transposeMatrix = function(matrixName) {
    calculate(
        matrixName,
        transpose,
        buildExpressionText("S", "T", matrixName)
    )
  }

  const calculate = function (matrixName, callbackFce, expressionText) {
    setParseError("")
    let res
    try {
      if (matrixName !== "") { //  if matrix is "" it means that calculation is between matrices A and B
        let inputMatrix = getMatrix(matrixName)
        res = callbackFce(inputMatrix.matrixElements)
      }
      else {
        res = callbackFce(applicationData.definedMatrices[0].matrixElements, applicationData.definedMatrices[1].matrixElements)
      }
      if (res !== null) {
        setResultMatrix(res)
        setExpressionText(expressionText)
      }
    } catch (e) {
      console.log(e)
      setParseError(e.message)
      setResultMatrix([[]])
      setExpressionText("")
    }
  }

  //  AB operations are: A x B, A + B, A - B
  //  S (single operations are:): det(A), det(B), T(A), T(B),...
  //  Syntax of expression text:
  //    AB operation: x
  //    AB operation: +
  //    S operation: det A
  //    S operation: T B
  //    S operation: inv A
  //    S operation:  inv B
  const buildExpressionText = function(typeOfOperation, operand, matrixName) {
    var res = ""
    if (typeOfOperation === "AB") {
       res += "AB operation: "
       res += operand
    }
    else if (typeOfOperation === "S") {
      res += "S operation: "
      res += operand
      res += " "
      res += matrixName
    }
    else {
      return
    }
    return res
  }

  const calculationsList = {
    transposeMatrix,
    addition,
    subtraction,
    multiplication,
    inverseMatrix,
    calculateDeterminant,
    calculateDot
  }

  /**
   * Functions for Definition Section such as dimension settings of individual matrices and removal of a matrix.
   * These functions are:
   *  addRowToMatrix - add one row full of zero elements to a specific matrix;
   *  removeRowFromMatrix - remove the most down row from a specific matrix;
   *  addColumnToMatrix - add one column full of zero elements to a specific matrix;
   *  removeColumnFromMatrix - remove the most right column from a specific matrix;
   *  deleteMatrix - deletes a specific matrix from the application;
   *  addNewMatrix - adds a new matrix to defined matrices;
   */
  const definitionSectionFunctions = {
    addRowToMatrix: function(idMatrix) {
      addRowToMatrix(idMatrix, applicationData, setApplicationData)
    },

    removeRowFromMatrix: function(idMatrix) {
      removeRowFromMatrix(idMatrix, applicationData, setApplicationData)
    },

    addColumnToMatrix: function(idMatrix) {
      addColumnToMatrix(idMatrix, applicationData, setApplicationData)
    },

    removeColumnFromMatrix: function(idMatrix) {
      removeColumnFromMatrix(idMatrix, applicationData, setApplicationData)
    },
    changeElementInMatrix: function (idMatrix, row, column, value) {
      changeElement(idMatrix, applicationData, setApplicationData, row, column, value)
    }
  };

  const getMatrixA = function () {
    return applicationData.definedMatrices[0]
  }

  const getMatrixB = function () {
    return applicationData.definedMatrices[1]
  }

  const getMatrix = function (matrixName) {
    if (matrixName === "A") {
      return getMatrixA()
    }
    else if (matrixName === "B") {
      return getMatrixB()
    }
    else {
      return false
    }
  }

  const matrixGetters = {getMatrixA, getMatrixB}


  return (
    <Homepage
        initialData = {applicationData}
        expressionText = {expressionText}
        resultMatrix = {resultMatrix}
        calculations = {calculationsList}
        definitionSectionFunctions = {definitionSectionFunctions}
        matrixGetters = {matrixGetters}
        parseError = {parseError}
    />
  );
};




export default Matrix;