import { types } from "../types";

const initialState = {
    packages: [],
    membership: {
        valor_token: 0,
    },
    selectedPackage: {
        id: null,
        numero_tokens: 0,
    },
    paymentMethod: 1,
    cards: [],
    selectedCard: null,
    showSavedCards: true,
    showSelectedCard: false,
    showStripeForm: false,
    stripeError: null,
    showSnackbar: false,
    showProgress: false,
    generateInvoice: false,
    costCenterId: "1",
    CDFI_Id: null,
    flagReloadUserCards: "",
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.set_noktos_packages:
            return {
                ...state,
                packages: payload.filter(noktosPackage => Number(noktosPackage.id) !== 7).map(packageNoktos => ({...packageNoktos, selectedPackages: 0})),
            };
        case types.update_selected_packages:
            const {idPackage, action} = payload
            let packageToUpdate = []

            switch (action) {
                case "add":
                    packageToUpdate = state.packages.map(packageNoktos => {
                        if (packageNoktos.id === idPackage) {
                            packageNoktos.selectedPackages++
                        }

                        return packageNoktos
                    })
                    break
                case "subtract":
                    packageToUpdate = state.packages.map(packageNoktos => {
                        if (packageNoktos.id === idPackage) {
                            if (packageNoktos.selectedPackages > 0) {
                                packageNoktos.selectedPackages--
                            }
                        }
                        return packageNoktos
                    })
                    break
            }
            return {
                ...state,
                packages: [...packageToUpdate],
            };

        case types.delete_selected_packages:
            let packageChange = []
            const {idPackageSelected} = payload
            packageChange = state.packages.map(packageNoktos => {
                if (idPackageSelected === packageNoktos.id) {
                    packageNoktos.selectedPackages = 0
                }
                return packageNoktos
            })

            return {
                ...state,
                packages: [...packageChange],
            };
        case types.set_user_membership:
            return {
                ...state,
                membership: payload,
            };
        case types.set_selected_package:
            return {
                ...state,
                selectedPackage: payload,
            };
        case types.set_package_payment_method:
            return {
                ...state,
                paymentMethod: payload,
            };
        case types.set_stripe_cards_info:
            return {
                ...state,
                cards: payload,
            };
        case types.set_selected_card:
            return {
                ...state,
                selectedCard: payload,
            };
        case types.show_saved_cards:
            return {
                ...state,
                showSavedCards: true,
            };
        case types.hide_saved_cards:
            return {
                ...state,
                showSavedCards: false,
            };
        case types.show_selected_card:
            return {
                ...state,
                showSelectedCard: true,
            };
        case types.hide_selected_card:
            return {
                ...state,
                showSelectedCard: false,
            };
        case types.show_stripe_form_card:
            return {
                ...state,
                showStripeForm: true,
            };
        case types.hide_stripe_form_card:
            return {
                ...state,
                showStripeForm: false,
            };
        case types.set_stripe_error:
            return {
                ...state,
                stripeError: payload,
            };
        case types.show_alert_stripe_error:
            return {
                ...state,
                showSnackbar: true,
            };
        case types.hide_alert_stripe_error:
            return {
                ...state,
                showSnackbar: false,
            };
        case types.show_progress_save_stripe_card:
            return {
                ...state,
                showProgress: true,
            };
        case types.hide_progress_save_stripe_card:
            return {
                ...state,
                showProgress: false,
            };
        case types.set_generate_invoice:
            return {
                ...state,
                generateInvoice: payload,
            };
        case types.set_cost_center_id:
            return {
                ...state,
                costCenterId: payload,
            };
        case types.set_CDFI_id:
            return {
                ...state,
                CDFI_Id: payload,
            };
        case types.get_reload_user_cards:
            return {
                ...state,
                flagReloadUserCards: payload,
            };

        default:
            return state;
    }
};
