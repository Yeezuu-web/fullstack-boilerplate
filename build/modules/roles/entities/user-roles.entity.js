"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolesEntity = void 0;
var entities_1 = require("../../../../../../../../../src/modules/users/entities");
var typeorm_1 = require("typeorm");
var _1 = require("./");
// import { v4 as uuidv4 } from 'uuid';
var UserRolesEntity = /** @class */ (function (_super) {
    __extends(UserRolesEntity, _super);
    function UserRolesEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    var _a;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], UserRolesEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], UserRolesEntity.prototype, "roleId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], UserRolesEntity.prototype, "userId", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: function () { return 'CURRENT_TIMESTAMP(6)'; } }),
        __metadata("design:type", Date)
    ], UserRolesEntity.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)',
        }),
        __metadata("design:type", Date)
    ], UserRolesEntity.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.RoleEntity; }, function (role) { return role.userRolesEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'roleId' }),
        __metadata("design:type", _1.RoleEntity)
    ], UserRolesEntity.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entities_1.UserEntity; }, function (user) { return user.userRolesEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'userId' }),
        __metadata("design:type", typeof (_a = typeof entities_1.UserEntity !== "undefined" && entities_1.UserEntity) === "function" ? _a : Object)
    ], UserRolesEntity.prototype, "user", void 0);
    UserRolesEntity = __decorate([
        (0, typeorm_1.Entity)({
            name: 'user-roles',
            // orderBy: {
            //   createdAt: 'ASC',
            // },
        })
    ], UserRolesEntity);
    return UserRolesEntity;
}(typeorm_1.BaseEntity));
exports.UserRolesEntity = UserRolesEntity;
//# sourceMappingURL=user-roles.entity.js.map