import { types } from "../types";

export const setNoktosPackages = (packages) => ({
    type: types.set_noktos_packages,
    payload: packages,
});

export const updateSelectedPackages = (idPackage, action) => ({
    type: types.update_selected_packages,
    payload: {
        idPackage,
        action
    },
});

export const deleteSelectedPackage = (idPackageSelected) => ({
    type: types.delete_selected_packages,
    payload: {
        idPackageSelected
    },
});

export const setUserMembership = (membership) => ({
    type: types.set_user_membership,
    payload: membership,
});

export const setSelectedPackage = (selectedPackage) => ({
    type: types.set_selected_package,
    payload: selectedPackage,
});

export const setPackagePaymentMethod = (method) => ({
    type: types.set_package_payment_method,
    payload: method,
});

export const setStripeCardsInfo = (cards) => ({
    type: types.set_stripe_cards_info,
    payload: cards,
});

export const setSelectedCard = (card) => ({
    type: types.set_selected_card,
    payload: card,
});

export const showSavedCards = () => ({
    type: types.show_saved_cards,
});

export const hideSavedCards = () => ({
    type: types.hide_saved_cards,
});

export const showSelectedCard = () => ({
    type: types.show_selected_card,
});

export const hideSelectedCard = () => ({
    type: types.hide_selected_card,
});

export const showStripeFormCard = () => ({
    type: types.show_stripe_form_card,
});

export const hideStripeFormCard = () => ({
    type: types.hide_stripe_form_card,
});

export const setStripeError = (err) => ({
    type: types.set_stripe_error,
    payload: err,
});

export const showAlertStripeError = () => ({
    type: types.show_alert_stripe_error,
});

export const hideAlertStripeError = () => ({
    type: types.hide_alert_stripe_error,
});

export const showProgressSaveStripeCard = () => ({
    type: types.show_progress_save_stripe_card,
});

export const hideProgressSaveStripeCard = () => ({
    type: types.hide_progress_save_stripe_card,
});

export const setGenerateInvoice = (checked) => ({
    type: types.set_generate_invoice,
    payload: checked,
});

export const setCostCenterId = (id) => ({
    type: types.set_cost_center_id,
    payload: id,
});

export const setCDFI_ID = (id) => ({
    type: types.set_CDFI_id,
    payload: id,
});

export const getReloadUserCards = (reloadId) => ({
    type: types.get_reload_user_cards,
    payload: reloadId,
});
