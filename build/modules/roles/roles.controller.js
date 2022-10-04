"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesController = void 0;
var common_1 = require("@nestjs/common");
var roles_service_1 = require("./roles.service");
var dto_1 = require("./dto");
var RolesController = /** @class */ (function () {
    function RolesController(rolesService) {
        this.rolesService = rolesService;
    }
    RolesController.prototype.create = function (createRolesDto) {
        return this.rolesService.create(createRolesDto);
    };
    RolesController.prototype.findAll = function () {
        return this.rolesService.findAll();
    };
    RolesController.prototype.findOne = function (id) {
        return this.rolesService.findOne(+id);
    };
    RolesController.prototype.update = function (id, updateRolesDto) {
        return this.rolesService.update(+id, updateRolesDto);
    };
    RolesController.prototype.remove = function (id) {
        return this.rolesService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [dto_1.CreateRolesDto]),
        __metadata("design:returntype", void 0)
    ], RolesController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RolesController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], RolesController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, dto_1.UpdateRolesDto]),
        __metadata("design:returntype", void 0)
    ], RolesController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], RolesController.prototype, "remove", null);
    RolesController = __decorate([
        (0, common_1.Controller)('roles'),
        __metadata("design:paramtypes", [roles_service_1.RolesService])
    ], RolesController);
    return RolesController;
}());
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map