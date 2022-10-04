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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = exports.UserRole = void 0;
var entities_1 = require("../../../../../../../../../src/modules/roles/entities");
var typeorm_1 = require("typeorm");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["MANAGER"] = "MANAGER";
    UserRole["USER"] = "USER";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'text', nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "numberOfUniqueViews", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'text', unique: true, nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "nickname", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'text', nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "firstName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'text', nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "lastName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'text', unique: true, nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "linkResetPassword", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "registered", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "isActivated", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "avatar", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: null }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "gender", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "activationLink", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "banned", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "banReason", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            name: 'creation_at',
            type: 'timestamp',
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
        }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            name: 'updated_at',
            type: 'timestamp',
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)',
        }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return entities_1.UserRolesEntity; }, function (userRolesEntity) { return userRolesEntity.user; }),
        __metadata("design:type", Array)
    ], UserEntity.prototype, "userRolesEntity", void 0);
    UserEntity = __decorate([
        (0, typeorm_1.Entity)({
            name: 'users',
            // orderBy: {
            //   createdAt: 'ASC',  // ascending
            // },
        })
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
//# sourceMappingURL=users.entity.js.map