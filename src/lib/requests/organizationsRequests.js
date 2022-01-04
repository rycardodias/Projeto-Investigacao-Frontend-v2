import { sendRequest } from './requests'

const token = localStorage.getItem('accessToken')

const getOrganizations = async () => {
    return await sendRequest('GET', 'organizations');
};

const getOrganizationId = async (id) => {
    return await sendRequest('GET', 'organizations/id/' + id);
};

const getOrganizationUserId = async (UserId) => {
    return await sendRequest('GET', 'organizations/UserId/' + UserId);
};

const createOrganization = async (type, UserId, name, address, locale, zipcode, fiscalNumber, telephone, mobilePhone) => {
    return await sendRequest('POST', 'organizations/create', { token, type, UserId, name, address, locale, zipcode, fiscalNumber, telephone, mobilePhone })
};

const updateOrganization = async (id, type, UserId, name, address, locale, zipcode, fiscalNumber, telephone, mobilePhone) => {
    return await sendRequest('PUT', 'organizations/update', { token, id, type, UserId, name, address, locale, zipcode, fiscalNumber, telephone, mobilePhone })
};

const deleteOrganization = async (id) => {
    return await sendRequest('DELETE', 'organizations/delete', { token, id })
}

export { getOrganizations, getOrganizationId, getOrganizationUserId, createOrganization, updateOrganization, deleteOrganization }