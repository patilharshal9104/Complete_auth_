import * as ownerService from "../services/owner.service.js";
import ApiResponse from "../../../common/utils/api-response.js";

const createOwner = async (req, res) => {
  const owner = await ownerService.createOwner(req.body);
  ApiResponse.created(res, "owner created successfully ", owner);
};

const getAllOwners = async (req, res) => {
  const owners = await ownerService.getAllOwners();
  ApiResponse.ok(res, "Owners fetched success", owners);
};

const getOwnerById = async (req, res) => {
  const owner = await ownerService.getOwnerById(req.params.id);
  ApiResponse.ok(res, "Found the user !!", owner);
};

const updateOwner = async (req, res) => {
  const updateOwner = await ownerService.updateOwner(req.params.id, req.body);
  ApiResponse.ok(res, "Updated success", updateOwner);
};

const deleteOwner = async (req, res) => {
  const deleteOwner = await ownerService.deleteOwner(req.params.id);
  ApiResponse.ok(res, "deleted");
};

export { createOwner, getAllOwners, getOwnerById, updateOwner, deleteOwner };
