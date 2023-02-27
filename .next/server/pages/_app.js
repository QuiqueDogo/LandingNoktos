module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/animate.css/animate.css
var animate = __webpack_require__("d+3G");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./node_modules/react-calendar/dist/Calendar.css
var Calendar = __webpack_require__("q96O");

// EXTERNAL MODULE: ./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css
var react_spinner_loader = __webpack_require__("Bb0u");

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-free/css/all.css
var css_all = __webpack_require__("FfUf");

// EXTERNAL MODULE: ./node_modules/swiper/swiper.scss
var swiper = __webpack_require__("X2ca");

// EXTERNAL MODULE: ./styles/main.scss
var main = __webpack_require__("WMMs");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__("5Buo");

// EXTERNAL MODULE: ./node_modules/react-dates/lib/css/_datepicker.css
var _datepicker = __webpack_require__("P+y9");

// EXTERNAL MODULE: external "redux-persist/integration/react"
var react_ = __webpack_require__("JPPj");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./redux/types.js
var types = __webpack_require__("9uw5");

// CONCATENATED MODULE: ./redux/reducers/customers.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  travellers: [],
  guests: [],
  userPermissions: []
};
const {
  get_travellers,
  get_guests,
  create_traveller,
  get_permissions,
  update_traveller,
  update_guest,
  create_guest,
  get_cost_centers_by_user_id_and_company_id,
  set_update_cost_centers,
  update_cost_centers,
  set_companies_in_guest
} = types["a" /* types */];
/* harmony default export */ var customers = (function (state = initialState, action) {
  const {
    type,
    payload
  } = action;

  const setItemsWithUpdatedItem = (items, newItem) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === newItem.id) {
        items[i] = newItem;
      }
    }

    return items;
  };

  switch (type) {
    case get_travellers:
      return _objectSpread(_objectSpread({}, state), {}, {
        travellers: payload.travellers
      });

    case create_traveller:
      return _objectSpread(_objectSpread({}, state), {}, {
        travellers: [...state.travellers, payload.newTraveller]
      });

    case create_guest:
      return _objectSpread(_objectSpread({}, state), {}, {
        guests: [...state.guests, payload.newGuest]
      });

    case get_guests:
      return _objectSpread(_objectSpread({}, state), {}, {
        guests: payload.guests
      });

    case get_permissions:
      return _objectSpread(_objectSpread({}, state), {}, {
        userPermissions: payload.permissions
      });

    case update_traveller:
      return _objectSpread(_objectSpread({}, state), {}, {
        travellers: setItemsWithUpdatedItem(state.travellers, payload.traveller)
      });

    case update_guest:
      return _objectSpread(_objectSpread({}, state), {}, {
        guests: setItemsWithUpdatedItem(state.guests, payload.guest)
      });

    case get_cost_centers_by_user_id_and_company_id:
      const {
        userId,
        costCenters
      } = payload;

      const setCostCentersToCurrentTraveller = traveller => {
        if (traveller.id === userId) {
          traveller.costCenters = costCenters;
          return traveller;
        } else {
          return traveller;
        }
      };

      return _objectSpread(_objectSpread({}, state), {}, {
        travellers: state.travellers.map(traveller => setCostCentersToCurrentTraveller(traveller))
      });

    case set_update_cost_centers:
      return _objectSpread(_objectSpread({}, state), {}, {
        travellers: state.travellers.map(traveller => {
          if (traveller.id === payload.userId) {
            if (payload.costCenter.isChecked) {
              traveller.costCenters.push(payload.costCenter);
            } else {
              traveller.costCenters = traveller.costCenters.filter(costCenter => costCenter.id !== payload.costCenter.id);
            }

            return traveller;
          } else {
            return traveller;
          }
        })
      });

    case set_companies_in_guest:
      return _objectSpread(_objectSpread({}, state), {}, {
        guests: state.guests.map(guest => {
          if (guest.id === payload.guestId) {
            guest.companies = payload.companies;
            return guest;
          } else {
            return guest;
          }
        })
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/userReducer.js
function userReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function userReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { userReducer_ownKeys(Object(source), true).forEach(function (key) { userReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { userReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function userReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let initState = {
  rol: {},
  user: {},
  searchInfo: {},
  userWallet: {},
  reloadUserWallet: "",
  isAuthenticated: false
};
/* harmony default export */ var userReducer = ((state = initState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case types["a" /* types */].set_is_authenticated:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        isAuthenticated: payload.isAuth
      });

    case types["a" /* types */].add_user:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        user: payload.user
      });

    case types["a" /* types */].add_rol:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        rol: payload.userRol
      });

    case types["a" /* types */].logout:
      return initState;

    case types["a" /* types */].set_search_form:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        searchInfo: payload
      });

    case types["a" /* types */].set_user_wallet:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        userWallet: payload
      });

    case types["a" /* types */].reload_user_wallet:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        reloadUserWallet: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/costCenters.js
function costCenters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function costCenters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { costCenters_ownKeys(Object(source), true).forEach(function (key) { costCenters_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { costCenters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function costCenters_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const {
  save_cost_center,
  get_cost_centers,
  update_center_cost
} = types["a" /* types */];
const costCenters_initialState = {
  data: []
};

const setItemsWithUpdatedItem = (items, newItem) => {
  console.log(items);

  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);

    if (items[i].id === newItem.id) {
      items[i] = newItem;
    }
  }

  console.log(items);
  return items;
};

/* harmony default export */ var costCenters = (function (state = costCenters_initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case save_cost_center:
      return {
        data: [...state.data, payload.newCostCenter]
      };

    case get_cost_centers:
      return costCenters_objectSpread(costCenters_objectSpread({}, state), {}, {
        data: payload.costCenters
      });

    case update_center_cost:
      return costCenters_objectSpread(costCenters_objectSpread({}, state), {}, {
        data: setItemsWithUpdatedItem(state.data, payload.centerCost)
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/reservations.js
function reservations_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reservations_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reservations_ownKeys(Object(source), true).forEach(function (key) { reservations_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reservations_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reservations_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reservations_initialState = {
  data: []
};
/* harmony default export */ var reservations = (function (state = reservations_initialState, action) {
  const {
    type,
    payload
  } = action;
  const {
    get_reservations
  } = types["a" /* types */];

  switch (type) {
    case get_reservations:
      return reservations_objectSpread(reservations_objectSpread({}, state), {}, {
        data: payload.reservations
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/companyReducer.js
function companyReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function companyReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { companyReducer_ownKeys(Object(source), true).forEach(function (key) { companyReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { companyReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function companyReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let companyReducer_initState = {
  company: {
    id: 0,
    nombre: "",
    rfc: "",
    razon_social: "",
    estatus_registro: 0,
    id_membresia: 0,
    nombre_membresia: ""
  },
  companies: [{
    id: 0,
    nombre: "",
    rfc: "",
    razon_social: "",
    estatus_registro: 0,
    id_membresia: 0,
    nombre_membresia: ""
  }],
  info: {},
  addressInfo: {},
  cp_id: null
};
/* harmony default export */ var companyReducer = ((state = companyReducer_initState, action) => {
  const {
    add_company,
    add_companies,
    get_company_by_id,
    set_address_info
  } = types["a" /* types */];
  const {
    type,
    payload
  } = action;

  switch (type) {
    case types["a" /* types */].add_company:
      return companyReducer_objectSpread(companyReducer_objectSpread({}, state), {}, {
        company: payload.company
      });

    case get_company_by_id:
      return companyReducer_objectSpread(companyReducer_objectSpread({}, state), {}, {
        info: payload.companyInfo
      });

    case set_address_info:
      return companyReducer_objectSpread(companyReducer_objectSpread({}, state), {}, {
        addressInfo: payload.addressInfo,
        cp_id: payload.addressInfo.colonia[0].cp_id
      });

    case types["a" /* types */].add_companies:
      return companyReducer_objectSpread(companyReducer_objectSpread({}, state), {}, {
        companies: payload.companies
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/searchHotelReducer.js
function searchHotelReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function searchHotelReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { searchHotelReducer_ownKeys(Object(source), true).forEach(function (key) { searchHotelReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { searchHotelReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function searchHotelReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let searchHotelReducer_initState = {
  politica: "",
  huesped_id: "",
  destino_id: "",
  tipo_habitacion_id: "",
  check_in: "",
  check_out: "",
  compania_id: "",
  idHotel: "",
  detailHotel: {},
  infoHotel: {},
  hotelsData: [],
  mainTraveller: null,
  noktosPolitic: false,
  reservationId: null,
  reservationToken: null
};
/* harmony default export */ var searchHotelReducer = ((state = searchHotelReducer_initState, action) => {
  switch (action.type) {
    case types["a" /* types */].set_search_info:
      return searchHotelReducer_objectSpread(searchHotelReducer_objectSpread({}, state), {}, {
        [action.payload.searchInfo.field]: action.payload.searchInfo.value
      });

    case types["a" /* types */].set_detail_hotel:
      return searchHotelReducer_objectSpread(searchHotelReducer_objectSpread({}, state), {}, {
        detailHotel: action.payload.detailHotel
      });

    case types["a" /* types */].set_current_hotel_selected:
      return searchHotelReducer_objectSpread(searchHotelReducer_objectSpread({}, state), {}, {
        infoHotel: action.payload.infoHotel
      });

    case types["a" /* types */].set_hotels_data:
      return searchHotelReducer_objectSpread(searchHotelReducer_objectSpread({}, state), {}, {
        hotelsData: action.payload
      });

    case types["a" /* types */].set_main_traveller:
      return searchHotelReducer_objectSpread(searchHotelReducer_objectSpread({}, state), {}, {
        mainTraveller: action.payload
      });

    case types["a" /* types */].set_noktos_politic:
      return searchHotelReducer_objectSpread(searchHotelReducer_objectSpread({}, state), {}, {
        noktosPolitic: action.payload
      });

    case types["a" /* types */].set_reservation_id:
      return searchHotelReducer_objectSpread(searchHotelReducer_objectSpread({}, state), {}, {
        reservationId: action.payload
      });

    case types["a" /* types */].set_reservation_token:
      return searchHotelReducer_objectSpread(searchHotelReducer_objectSpread({}, state), {}, {
        reservationToken: action.payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/packagesReducer.js
function packagesReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function packagesReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { packagesReducer_ownKeys(Object(source), true).forEach(function (key) { packagesReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { packagesReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function packagesReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const packagesReducer_initialState = {
  packages: [],
  membership: {
    valor_token: 0
  },
  selectedPackage: {
    id: null,
    numero_tokens: 0
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
  flagReloadUserCards: ""
};
/* harmony default export */ var packagesReducer = ((state = packagesReducer_initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case types["a" /* types */].set_noktos_packages:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        packages: payload.filter(noktosPackage => Number(noktosPackage.id) !== 7).map(packageNoktos => packagesReducer_objectSpread(packagesReducer_objectSpread({}, packageNoktos), {}, {
          selectedPackages: 0
        }))
      });

    case types["a" /* types */].update_selected_packages:
      const {
        idPackage,
        action
      } = payload;
      let packageToUpdate = [];

      switch (action) {
        case "add":
          packageToUpdate = state.packages.map(packageNoktos => {
            if (packageNoktos.id === idPackage) {
              packageNoktos.selectedPackages++;
            }

            return packageNoktos;
          });
          break;

        case "subtract":
          packageToUpdate = state.packages.map(packageNoktos => {
            if (packageNoktos.id === idPackage) {
              if (packageNoktos.selectedPackages > 0) {
                packageNoktos.selectedPackages--;
              }
            }

            return packageNoktos;
          });
          break;
      }

      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        packages: [...packageToUpdate]
      });

    case types["a" /* types */].delete_selected_packages:
      let packageChange = [];
      const {
        idPackageSelected
      } = payload;
      packageChange = state.packages.map(packageNoktos => {
        if (idPackageSelected === packageNoktos.id) {
          packageNoktos.selectedPackages = 0;
        }

        return packageNoktos;
      });
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        packages: [...packageChange]
      });

    case types["a" /* types */].set_user_membership:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        membership: payload
      });

    case types["a" /* types */].set_selected_package:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        selectedPackage: payload
      });

    case types["a" /* types */].set_package_payment_method:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        paymentMethod: payload
      });

    case types["a" /* types */].set_stripe_cards_info:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        cards: payload
      });

    case types["a" /* types */].set_selected_card:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        selectedCard: payload
      });

    case types["a" /* types */].show_saved_cards:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        showSavedCards: true
      });

    case types["a" /* types */].hide_saved_cards:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        showSavedCards: false
      });

    case types["a" /* types */].show_selected_card:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        showSelectedCard: true
      });

    case types["a" /* types */].hide_selected_card:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        showSelectedCard: false
      });

    case types["a" /* types */].show_stripe_form_card:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        showStripeForm: true
      });

    case types["a" /* types */].hide_stripe_form_card:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        showStripeForm: false
      });

    case types["a" /* types */].set_stripe_error:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        stripeError: payload
      });

    case types["a" /* types */].show_alert_stripe_error:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        showSnackbar: true
      });

    case types["a" /* types */].hide_alert_stripe_error:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        showSnackbar: false
      });

    case types["a" /* types */].show_progress_save_stripe_card:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        showProgress: true
      });

    case types["a" /* types */].hide_progress_save_stripe_card:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        showProgress: false
      });

    case types["a" /* types */].set_generate_invoice:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        generateInvoice: payload
      });

    case types["a" /* types */].set_cost_center_id:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        costCenterId: payload
      });

    case types["a" /* types */].set_CDFI_id:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        CDFI_Id: payload
      });

    case types["a" /* types */].get_reload_user_cards:
      return packagesReducer_objectSpread(packagesReducer_objectSpread({}, state), {}, {
        flagReloadUserCards: payload
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__("kMCw");

// CONCATENATED MODULE: ./redux/reducers/membershipReducer.js
function membershipReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function membershipReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { membershipReducer_ownKeys(Object(source), true).forEach(function (key) { membershipReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { membershipReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function membershipReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let membershipReducer_initState = {
  membershipPackage: {
    id: 2,
    nombre: "",
    costo_mensual: "",
    costo_anual: "",
    noches_gratis: "",
    numero_tokens: "",
    descuento: "",
    valor_token: "",
    es_activo: "",
    created_at: "",
    updated_at: ""
  },
  membership: {
    id: 1,
    catalogo_membresia: []
  },
  membershipBalance: {},
  membershipOfCompany: {},
  data: {},
  previousBalance: {},
  payWithToken: [],
  payMarketPlace: [],
  buyTokens: [],
  totalMarketPlace: 0,
  totalBuyTokens: 0,
  movementsTokens: [],
  totalUseTokens: 0,
  totalBuyCentauros: 0,
  totalUseCentauros: 0,
  initialBalanceNoktos: 0,
  initialBalanceCentauros: 0,
  finalBalanceNoktos: 0,
  finalBalanceCentauros: 0,
  totalBuyTokensMoney: 0
};
const {
  get_membership,
  get_previous_balance,
  get_movements,
  get_movements_history
} = types["a" /* types */];

const createMovementsFromPayWithTokenItems = payWithTokenItems => {
  const movements = [];

  for (let pagoToken of payWithTokenItems) {
    let movement = {
      fecha: pagoToken.created_at,
      estado: pagoToken.reservacion.estado,
      token_inicial: pagoToken.token_inicial,
      token_gasto: pagoToken.token_gasto,
      token_adquirido: pagoToken.token_ajuste > 0 ? `*${pagoToken.token_ajuste}` : '-',
      token_fin: pagoToken.token_fin,
      noches_gratis_inicial: pagoToken.noches_gratis_inicial,
      noches_gratis_gasto: pagoToken.noches_gratis_gasto,
      noches_gratis_fin: pagoToken.noches_gratis_fin,
      noches_gratis_adquirido: pagoToken.noches_gratis_ajuste > 0 ? `*${pagoToken.noches_gratis_ajuste}` : '-',
      created_at_original: pagoToken.reservacion.created_at_original,
      total: '',
      viajero: pagoToken.viajero,
      reservante: pagoToken.reservante,
      centro_costos: pagoToken.centro_costos,
      descripcion: `Reservación en el hotel: ${pagoToken.host !== undefined ? pagoToken.host.nombre : ''} con número de reservación: ${pagoToken.reservacion !== undefined ? pagoToken.reservacion.codigo_reservacion : ''}`
    };
    movements.push(movement);
  }

  return movements;
};

const createMovementsFromBuyTokensItems = buyTokensItems => {
  const movements = [];

  for (let compraToken of buyTokensItems) {
    let movement = {
      fecha: compraToken.created_at,
      token_inicial: compraToken.token_inicial,
      token_gasto: '',
      token_adquirido: compraToken.token_adquirido,
      token_fin: compraToken.token_fin,
      noches_gratis_inicial: '',
      noches_gratis_gasto: '',
      noches_gratis_fin: '',
      noches_gratis_adquirido: '',
      total: compraToken.total,
      descripcion: compraToken.brand !== null && compraToken.last_4 !== null ? `Adquisición de noktos en la plataforma con la tarjeta ${compraToken.brand} terminación  ${compraToken.last_4} ` : `Adquisición de noktos en la plataforma por medio de transferencia electrónica `
    };
    movements.push(movement);
  }

  return movements;
};

const createMovementsFromDevolutionItems = devolutionItems => {
  const movements = [];

  for (let devolucionTokens of devolutionItems) {
    let movement = {
      fecha: devolucionTokens.updated_at,
      token_inicial: devolucionTokens.token_inicial,
      token_gasto: "",
      token_adquirido: devolucionTokens.token_gasto,
      token_fin: devolucionTokens.token_fin,
      total: '',
      descripcion: `Devolución de noktos `
    };
    movements.push(movement);
  }

  return movements;
};

function compareFromDates(a, b) {
  const dateA = external_moment_(a.fecha).format("YYYY-MM-DD");
  const dateB = external_moment_(b.fecha).format("YYYY-MM-DD");
  let comparison = 0;

  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }

  return comparison;
}

const sumTotal = items => items.reduce((a, {
  total
}) => a + parseInt(total), 0);

const sumUseTokens = items => items.reduce((a, {
  token_gasto
}) => a + parseInt(token_gasto), 0);

const sumDevolutionTokens = items => items.reduce((a, {
  token_ajuste
}) => a + parseInt(token_ajuste), 0);

const sumBuyTokensMoney = items => items.reduce((a, {
  total
}) => a + parseFloat(total), 0);

const sumBuyTokens = items => items.reduce((a, {
  token_adquirido
}) => a + parseInt(token_adquirido), 0);

const sumBuyCentauros = items => items.reduce((a, {
  noches_gratis_gasto
}) => a + parseInt(noches_gratis_gasto), 0);

const sumUseCentauros = items => items.reduce((a, {
  token_gasto
}) => a + parseInt(token_gasto), 0);

/* harmony default export */ var membershipReducer = ((state = membershipReducer_initState, action) => {
  var _mergedArrayOfBuysAnd, _mergedArrayOfBuysAnd2, _mergedArrayOfBuysAnd3, _mergedArrayOfBuysAnd4, _mergedArrayOfBuysAnd5, _mergedArrayOfBuysAnd6, _mergedArrayOfBuysAnd7, _mergedArrayOfBuysAnd8;

  const {
    type,
    payload
  } = action;

  switch (type) {
    case types["a" /* types */].select_membership:
      return membershipReducer_objectSpread(membershipReducer_objectSpread({}, state), {}, {
        membership: payload.membership
      });

    case types["a" /* types */].select_membership_package:
      return membershipReducer_objectSpread(membershipReducer_objectSpread({}, state), {}, {
        membershipPackage: payload.membershipPackage
      });

    case types["a" /* types */].set_membership_balance:
      return membershipReducer_objectSpread(membershipReducer_objectSpread({}, state), {}, {
        membershipBalance: payload.membershipBalance
      });

    case types["a" /* types */].set_membership_of_company:
      return membershipReducer_objectSpread(membershipReducer_objectSpread({}, state), {}, {
        membershipOfCompany: payload.membershipOfCompany
      });

    case get_membership:
      return membershipReducer_objectSpread(membershipReducer_objectSpread({}, state), {}, {
        data: payload.membership
      });

    case get_previous_balance:
      return membershipReducer_objectSpread(membershipReducer_objectSpread({}, state), {}, {
        previousBalance: payload.previousBalance,
        totalBuyCentauros: payload.payCentauros
      });

    case get_movements:
      let mergedArrayOfBuysAndSell = [...payload.payWithToken, ...payload.buyTokens];
      const initialBalanceNoktos = (_mergedArrayOfBuysAnd = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]) === null || _mergedArrayOfBuysAnd === void 0 ? void 0 : _mergedArrayOfBuysAnd.token_inicial;
      const initialBalanceCentauros = ((_mergedArrayOfBuysAnd2 = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]) === null || _mergedArrayOfBuysAnd2 === void 0 ? void 0 : _mergedArrayOfBuysAnd2.noches_gratis_inicial) !== undefined ? (_mergedArrayOfBuysAnd3 = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]) === null || _mergedArrayOfBuysAnd3 === void 0 ? void 0 : _mergedArrayOfBuysAnd3.noches_gratis_inicial : (_mergedArrayOfBuysAnd4 = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]) === null || _mergedArrayOfBuysAnd4 === void 0 ? void 0 : _mergedArrayOfBuysAnd4.noches_inicial;
      const finalBalanceNoktos = (_mergedArrayOfBuysAnd5 = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]) === null || _mergedArrayOfBuysAnd5 === void 0 ? void 0 : _mergedArrayOfBuysAnd5.token_fin;
      const finalBalanceCentauros = ((_mergedArrayOfBuysAnd6 = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]) === null || _mergedArrayOfBuysAnd6 === void 0 ? void 0 : _mergedArrayOfBuysAnd6.noches_gratis_fin) !== undefined ? (_mergedArrayOfBuysAnd7 = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]) === null || _mergedArrayOfBuysAnd7 === void 0 ? void 0 : _mergedArrayOfBuysAnd7.noches_gratis_fin : (_mergedArrayOfBuysAnd8 = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]) === null || _mergedArrayOfBuysAnd8 === void 0 ? void 0 : _mergedArrayOfBuysAnd8.noches_fin;
      let movements = [...createMovementsFromPayWithTokenItems(payload.payWithToken), ...createMovementsFromBuyTokensItems(payload.buyTokens), ...createMovementsFromDevolutionItems(payload.devolutions)];
      movements.sort(utils["b" /* compareDates */]);
      return membershipReducer_objectSpread(membershipReducer_objectSpread({}, state), {}, {
        payWithToken: payload.payWithToken,
        payMarketPlace: payload.payMarketPlace,
        buyTokens: payload.buyTokens,
        movementsTokens: movements,
        totalMarketPlace: sumTotal(payload.payMarketPlace),
        totalBuyTokens: sumBuyTokens(payload.buyTokens),
        totalBuyTokensMoney: sumBuyTokensMoney(payload.buyTokens),
        totalUseTokens: sumUseTokens(payload.payWithToken) - sumDevolutionTokens(payload.payWithToken),
        totalUseCentauros: sumBuyCentauros(payload.payWithToken),
        initialBalanceNoktos: initialBalanceNoktos,
        initialBalanceCentauros: initialBalanceCentauros,
        finalBalanceNoktos: finalBalanceNoktos,
        finalBalanceCentauros: finalBalanceCentauros
      });

    case get_movements_history:
      let movementsHistory = [...createMovementsFromPayWithTokenItems(payload.payWithToken), ...createMovementsFromBuyTokensItems(payload.buyTokens), ...createMovementsFromDevolutionItems(payload.devolutions)];
      movementsHistory.sort(utils["b" /* compareDates */]);
      return membershipReducer_objectSpread(membershipReducer_objectSpread({}, state), {}, {
        payWithToken: payload.payWithToken,
        payMarketPlace: payload.payMarketPlace,
        buyTokens: payload.buyTokens,
        totalMarketPlace: sumTotal(payload.payMarketPlace),
        totalBuyTokens: sumBuyTokens(payload.buyTokens),
        movementsTokens: movementsHistory,
        totalUseTokens: sumUseTokens(payload.payWithToken),
        previousBalance: {
          token_inicial: payload.prevMembershipBalance.saldo_token,
          token_final: payload.prevMembershipBalance.saldo_token_inicial !== null ? payload.prevMembershipBalance.saldo_token_inicial : 0,
          inicialCentauros: payload.prevMembershipBalance.saldo_noches_gratis,
          finalCentauros: payload.prevMembershipBalance.saldo_noches_gratis_inicial !== null ? payload.prevMembershipBalance.saldo_noches_gratis_inicial : 0
        },
        membershipBalance: membershipReducer_objectSpread(membershipReducer_objectSpread({}, membershipReducer_initState.membershipBalance), {}, {
          saldo_token: payload.prevMembershipBalance.saldo_token
        }),
        totalUseCentauros: sumBuyCentauros(payload.payWithToken)
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/aplicationReducer.js
function aplicationReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function aplicationReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { aplicationReducer_ownKeys(Object(source), true).forEach(function (key) { aplicationReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { aplicationReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function aplicationReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const aplicationReducer_initialState = {
  data: {},
  historial: [],
  optionMenu: 0,
  loading: false,
  prevPath: null,
  showDrawer: false,
  pricePackageSelected: 1
};
/* harmony default export */ var aplicationReducer = ((state = aplicationReducer_initialState, action) => {
  var _newHistorial;

  const {
    type,
    payload
  } = action;

  switch (type) {
    case types["a" /* types */].show_loader:
      return aplicationReducer_objectSpread(aplicationReducer_objectSpread({}, state), {}, {
        loading: true
      });

    case types["a" /* types */].hide_loader:
      return aplicationReducer_objectSpread(aplicationReducer_objectSpread({}, state), {}, {
        loading: false
      });

    case types["a" /* types */].show_drawer:
      return aplicationReducer_objectSpread(aplicationReducer_objectSpread({}, state), {}, {
        showDrawer: true
      });

    case types["a" /* types */].hide_drawer:
      return aplicationReducer_objectSpread(aplicationReducer_objectSpread({}, state), {}, {
        showDrawer: false
      });

    case types["a" /* types */].set_option_menu:
      return aplicationReducer_objectSpread(aplicationReducer_objectSpread({}, state), {}, {
        optionMenu: payload
      });

    case types["a" /* types */].change_modal_login_status:
      return aplicationReducer_objectSpread(aplicationReducer_objectSpread({}, state), {}, {
        modal_login_status: payload.modal_login_status
      });

    case types["a" /* types */].set_package_price_selected:
      return aplicationReducer_objectSpread(aplicationReducer_objectSpread({}, state), {}, {
        pricePackageSelected: payload
      });

    case types["a" /* types */].set_historial_pages:
      const {
        historial
      } = state;
      let newHistorial = historial.slice();
      newHistorial.push(payload);
      if (newHistorial.length > 10) newHistorial.shift();
      return aplicationReducer_objectSpread(aplicationReducer_objectSpread({}, state), {}, {
        historial: newHistorial,
        prevPath: (_newHistorial = newHistorial[newHistorial.length - 2]) !== null && _newHistorial !== void 0 ? _newHistorial : null
      });

    case types["a" /* types */].clear_historial_pages:
      return aplicationReducer_objectSpread(aplicationReducer_objectSpread({}, state), {}, {
        historial: []
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/companyStructureReducer.js
function companyStructureReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function companyStructureReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { companyStructureReducer_ownKeys(Object(source), true).forEach(function (key) { companyStructureReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { companyStructureReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function companyStructureReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const companyStructureReducer_initialState = {
  structureData: []
};
/* harmony default export */ var companyStructureReducer = (function (state = companyStructureReducer_initialState, action) {
  const {
    type,
    payload
  } = action;
  const {
    get_company_structure
  } = types["a" /* types */];

  switch (type) {
    case get_company_structure:
      return companyStructureReducer_objectSpread(companyStructureReducer_objectSpread({}, state), {}, {
        structureData: payload.companyStructureData
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/promotionReducer.js
function promotionReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function promotionReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { promotionReducer_ownKeys(Object(source), true).forEach(function (key) { promotionReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { promotionReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function promotionReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const promotionReducer_initialState = {
  promotion: null
};
/* harmony default export */ var promotionReducer = (function (state = promotionReducer_initialState, action) {
  const {
    type,
    payload
  } = action;
  const {
    set_promotion_data
  } = types["a" /* types */];

  switch (type) {
    case set_promotion_data:
      console.log("payload", payload.promotion);
      return promotionReducer_objectSpread(promotionReducer_objectSpread({}, state), {}, {
        promotion: payload.promotion
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/rootReducer.js













const appReducer = Object(external_redux_["combineReducers"])({
  /* your app’s top-level reducers */
  customers: customers,
  costCenters: costCenters,
  reservations: reservations,
  user: userReducer,
  applicationReducer: aplicationReducer,
  searchInfo: searchHotelReducer,
  company: companyReducer,
  membership: membershipReducer,
  noktosPackages: packagesReducer,
  companyStructure: companyStructureReducer,
  promotion: promotionReducer
});

const rootReducer = (state, action) => {
  if (action.type === types["a" /* types */].logout || action.type === types["a" /* types */].reset) return appReducer(undefined, action);
  return appReducer(state, action);
};

/* harmony default export */ var reducers_rootReducer = (rootReducer);
// CONCATENATED MODULE: ./redux/store.js


 // defaults to localStorage for web




const persistConfig = {
  key: "root",
  storage: storage_default.a
};
const store_initialState = {};
const persistedReducer = Object(external_redux_persist_["persistReducer"])(persistConfig, reducers_rootReducer);
/* harmony default export */ var redux_store = (() => {
  let store = Object(external_redux_["createStore"])(persistedReducer, store_initialState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
  let persistor = Object(external_redux_persist_["persistStore"])(store);
  return {
    store,
    persistor
  };
});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./redux/actions/application.js
var application = __webpack_require__("f+8g");

// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const {
  store: _app_store,
  persistor: _app_persistor
} = redux_store();

const MyApp = ({
  Component,
  pageProps
}) => {
  const router = Object(router_["useRouter"])();
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: cleanHistorial,
    1: setCleanHistorial
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (!cleanHistorial) {
      setCleanHistorial(true);
      dispatch(Object(application["a" /* clearHistorialPages */])());
    }

    const currentPath = router.asPath;
    dispatch(Object(application["d" /* setHistorialPages */])(currentPath));
  }, [Component]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
    store: _app_store,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["PersistGate"], {
      loading: null,
      persistor: _app_persistor,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
    })
  });
};

const makestore = () => _app_store;

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makestore);
/* harmony default export */ var _app = __webpack_exports__["default"] = (wrapper.withRedux(MyApp));

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Buo":
/***/ (function(module, exports) {



/***/ }),

/***/ "9uw5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return types; });
const types = {
  login: "LOGIN",
  logout: "LOGOUT",
  reset: "RESET",
  set_is_authenticated: "SET_IS_AUTHENTICATED",
  show_drawer: "SHOW_DRAWER",
  hide_drawer: "HIDE_DRAWER",
  clear_historial_pages: "CLEAR_HISTORIAL_PAGES",
  set_historial_pages: "SET_HISTORIAL_PAGES",
  set_package_price_selected: "SET_PACKAGE_PRICE_SELECTED",
  set_option_menu: "SET_OPTION_MENU",
  set_search_form: "SET_SEARCH_FORM",
  add_company: "ADD_COMPANY",
  add_companies: "ADD_COMPANIES",
  change_modal_login_status: "CHANGE_MODAL_LOGIN_STATUS",
  set_user_wallet: "SET_USER_WALLET",
  reload_user_wallet: "RELOAD_USER_WALLET",
  set_reservation_id: "SET_RESERVATION_ID",
  set_reservation_token: "SET_RESERVATION_TOKEN",
  set_hotels_data: "SET_HOTELS_DATA",
  set_search_info: "SET_SEARCH_INFO",
  set_current_hotel_selected: "SER_CURRENT_HOTEL_SELECTED",
  select_membership: "SELECT_MEMBERSHIP",
  select_membership_package: "SELECT_MEMBERSHIP_PACKAGE",
  add_user: "ADD_USER",
  add_rol: "ADD_ROL",
  set_membership_balance: "SET_MEMBERSHIP_BALANCE",
  set_membership_of_company: "SET_MEMBERSHIP_OF_COMPANY",
  get_membership: "GET_MEMBERSHIP",
  set_detail_hotel: "SET_DETAIL_HOTEL",
  get_reservations: "GET_RESERVATIONS",
  hide_loader: "HIDE_LOADER",
  show_loader: "SHOW_LOADER",
  get_cost_centers: "GET_COST_CENTERS",
  get_cost_centers_by_user_id_and_company_id: "GET_COST_CENTERS_BY_USER_ID_AND_COMPANY_ID",
  set_update_cost_centers: "SET_UPDATE_COST_CENTERS",
  set_companies_in_guest: "SET_COMPANIES_IN_GUEST",
  update_cost_centers: "UPDATE_COST_CENTERS",
  save_cost_center: "SAVE_COST_CENTER",
  update_cost_center: "UPDATE_COST_CENTER",
  get_travellers: "GET_TRAVELLERS",
  create_traveller: "CREATE_TRAVELLER",
  create_guest: "CREATE_GUEST",
  update_traveller: "UPDATE_TRAVELLER",
  update_guest: "UPDATE_GUEST",
  update_center_cost: "UPDATE_CENTER_COST",
  get_guests: "GET_GUESTS",
  get_permissions: "GET_PERMISSIONS",
  get_previous_balance: "GET_PREVIOUS_BALANCE",
  get_movements: "GET_MOVEMENTS",
  get_movements_history: "GET_MOVEMENTS_HISTORY",
  get_companie: "GET_COMPANIE",
  get_company_by_id: "GET_COMPANY_BY_ID",
  set_address_info: "SET_ADDRESS_INFO",
  get_company_structure: "GET_COMPANY_STRUCTURE",
  set_main_traveller: "SET_MAIN_TRAVELLER",
  set_noktos_politic: "SET_NOKTOS_POLITIC",

  /* PACKAGES */
  set_noktos_packages: "SET_NOKTOS_PACKAGES",
  set_user_membership: "SET_USER_MEMBERSHIP",
  set_selected_package: "SET_SELECTED_PACKAGE",
  set_package_payment_method: "SET_PACKAGE_PAYMENT_METHOD",
  set_stripe_cards_info: "SET_STRIPE_CARDS_INFO",
  set_selected_card: "SET_SELECTED_CARD",
  show_saved_cards: "SHOW_SAVED_CARDS",
  hide_saved_cards: "HIDE_SAVED_CARDS",
  show_selected_card: "SHOW_SELECTED_CARD",
  hide_selected_card: "HIDE_SELECTED_CARD",
  show_stripe_form_card: "SHOW_STRIPE_FORM_CARD",
  hide_stripe_form_card: "HIDE_STRIPE_FORM_CARD",
  set_stripe_error: "SET_STRIPE_ERROR",
  show_alert_stripe_error: "SHOW_ALERT_STRIPE_ERROR",
  hide_alert_stripe_error: "HIDE_ALERT_STRIPE_ERROR",
  show_progress_save_stripe_card: "SHOW_PROGRESS_SAVE_STRIPE_CARD",
  hide_progress_save_stripe_card: "HIDE_PROGRESS_SAVE_STRIPE_CARD",
  set_generate_invoice: "SET_GENERATE_INVOICE",
  set_cost_center_id: "SET_COST_CENTER_ID",
  set_CDFI_id: "SET_CDFI_ID",
  get_reload_user_cards: "GET_RELOAD_USER_CARDS",
  set_promotion_data: "SET_PROMOTION_DATA",
  update_selected_packages: "UPDATE_SELECTED_PACKAGES",
  delete_selected_packages: "DELETE_SELECTED_PACKAGES"
};

/***/ }),

/***/ "Bb0u":
/***/ (function(module, exports) {



/***/ }),

/***/ "CBiN":
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FfUf":
/***/ (function(module, exports) {



/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JPPj":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "P+y9":
/***/ (function(module, exports) {



/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "WMMs":
/***/ (function(module, exports) {



/***/ }),

/***/ "X2ca":
/***/ (function(module, exports) {



/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d+3G":
/***/ (function(module, exports) {



/***/ }),

/***/ "f+8g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return showLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hideLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return showDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hideDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setOptionMenu; });
/* unused harmony export changeOverlayStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setPackagePriceSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setHistorialPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearHistorialPages; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9uw5");

const showLoader = () => dispatch => {
  dispatch({
    type: "SHOW_LOADER"
  });
};
const hideLoader = () => dispatch => {
  dispatch({
    type: "HIDE_LOADER"
  });
};
const showDrawer = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* types */ "a"].show_drawer
});
const hideDrawer = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* types */ "a"].hide_drawer
});
const setOptionMenu = option => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* types */ "a"].set_option_menu,
  payload: option
});
const changeOverlayStatus = modal_login_status => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* types */ "a"].change_modal_login_status,
    payload: {
      modal_login_status
    }
  };
};
const setPackagePriceSelected = packageId => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* types */ "a"].set_package_price_selected,
  payload: packageId
});
const setHistorialPages = asPath => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* types */ "a"].set_historial_pages,
  payload: asPath
});
const clearHistorialPages = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* types */ "a"].clear_historial_pages
});

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kMCw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scrollToTop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return compareDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkIfSessionExist; });
/* unused harmony export showToast */
/* unused harmony export getFormatDate */
/* unused harmony export getNumberOfDays */
/* unused harmony export downloadPDF */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeDoubleSpaces; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CBiN");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}
const compareDates = (a, b) => {
  const completeDateA = new moment__WEBPACK_IMPORTED_MODULE_0___default.a(a.fecha).format("YYYY-MM-DD HH:mm:ss");
  const completeDateB = new moment__WEBPACK_IMPORTED_MODULE_0___default.a(b.fecha).format("YYYY-MM-DD HH:mm:ss");
  if (completeDateA > completeDateB) return 1;else if (completeDateA < completeDateB) return -1;else return 0;
};
const checkIfSessionExist = router => {
  const token = localStorage.getItem("local_token"); // if (token !== null) router.push("/dashboard")
};
const showToast = ({
  type,
  text,
  duration
}) => {
  const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: duration,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener("mouseenter", sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.stopTimer);
      toast.addEventListener("mouseleave", sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.resumeTimer);
    }
  });
  Toast.fire({
    icon: type,
    title: text
  });
};
const getFormatDate = date => moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY-MM-DD");
const getNumberOfDays = (start, end) => {
  const endDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(end);
  const startDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(start);
  const days = endDate.diff(startDate, "days");
  return days;
};
const downloadPDF = ({
  documentLink,
  name,
  callback,
  extension
}) => {
  try {
    const linkSource = `data:application/${extension};base64,${documentLink}`;
    const downloadLink = document.createElement("a");
    const fileName = `${name}.${extension}`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();

    if (callback !== null) {
      callback();
    }
  } catch (ex) {
    console.log(ex);
  }
};
const removeDoubleSpaces = value => {
  if (typeof value !== "string") return value;
  const arrStr = value.split(' ');
  const expVacio = /^\s*$/;

  const vacio = str => expVacio.test(str);

  const newArrStr = arrStr.filter(arr => !vacio(arr));
  return newArrStr.join(' ');
};

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "q96O":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });