"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesModule = void 0;
var typeorm_1 = require("@nestjs/typeorm");
var entities_1 = require("../users/entities");
var entities_2 = require("./entities");
var common_1 = require("@nestjs/common");
var roles_service_1 = require("./roles.service");
var roles_controller_1 = require("./roles.controller");
var entities_3 = require("./entities");
var RolesModule = /** @class */ (function () {
    function RolesModule() {
    }
    RolesModule = __decorate([
        (0, common_1.Module)({
            controllers: [roles_controller_1.RolesController],
            providers: [roles_service_1.RolesService],
            imports: [typeorm_1.TypeOrmModule.forFeature([entities_3.RoleEntity, entities_2.UserRolesEntity, entities_1.UserEntity])],
            exports: [roles_service_1.RolesService]
        })
    ], RolesModule);
    return RolesModule;
}());
exports.RolesModule = RolesModule;
//# sourceMappingURL=roles.module.js.map