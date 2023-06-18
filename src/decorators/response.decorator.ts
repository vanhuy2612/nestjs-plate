import { Type, applyDecorators } from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiExtraModels,
  ApiOkResponse,
  getSchemaPath,
} from "@nestjs/swagger";
import { ExceptionResponse, GeneralResponse, PaginatedResponse } from "@src/dtos/responses";

export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel
) => {
  return applyDecorators(
    ApiExtraModels(PaginatedResponse),
    ApiExtraModels(model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginatedResponse) },
          {
            properties: {
              data: {
                type: "array",
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    })
  );
};

export const CustomApiOKResponse = <TModel extends Type<any>>(
  model: TModel
) => {
  return applyDecorators(
    ApiExtraModels(GeneralResponse),
    ApiExtraModels(model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(GeneralResponse) },
          {
            properties: {
              data: {
                $ref: getSchemaPath(model)              },
            },
          },
        ],
      },
    })
  );
};

export const ApiExceptionResponse = () => {
  return applyDecorators(
    ApiExtraModels(ExceptionResponse),
    ApiBadRequestResponse({
      schema: {
        $ref: getSchemaPath(ExceptionResponse),
      },
    })
  );
};
