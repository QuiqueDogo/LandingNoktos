export const apiRoutes = {
    baseUrl: "https://api.noktos.com/api/",
    login: "login",
    datesAvailability: "citasDisponibilidad",
    scheduleDate: "cita",
    baseCompanies: "companias",
    infoCP: "location",
    paymentMethods: "/metodospago",
    useCFDI: "/cdfi",
    billingInformation: "/datosFacturacion",
    taxInformation: "/fiscales",
    memberships: "membresias",
    baseStripe: "stripe/",
    cards: "tarjetas",
    baseUsers: "usuarios",
    registerTaxesInfo: "/fiscales",
    registerBillingInfo: "/datosFacturacion",
    costCenters: "centrocostos",
    centerCosts: "centroscosto",
    travellers: "viajeros",
    guest: "/reservante",
    getGuest: "/listarReservante",
    reservations: "reservaciones",
    baseReservations: "reservacion",
    resend: "/reenviar",
    membership: "membresia",
    balance: "/saldo",
    prevBalanceAaccount: "/saldosPeriodoAnterior",
    movements: "/movimientos",
    historical: "/historico",
    baseCompany: "companias",
    accountStatus: "/estadoCuenta",
    addCompany: "compania",
    users: "users",
    detail: 'detail',
    documents: "documentos",
    payMembership: "/pago",
    updateTraveller: "viajero",
    updateGuest: "reservante",
    updateCostCenter: "centrocostos",
    getCostCenters: "centrocostos/viajeros",
    //PORTAL
    banner: "banner",
    destinations: "destinos",
    roomTypes: "tipoHabitaciones",
    baseHotel: "hoteles",
    baseHost: "host",
    baseSearchHost: "buscarHost",
    baseSearchRoom: "habitaciones",
    books: "reservas/",
    baseRooms: "habitaciones",
    baseTraveller: "viajeros/",
    taxesTypes: "tipoImpuestos",
    taxes: "impuestos",
    tokens: "tokens",
    buy: "comprar/",
    pay: "pago",
    baseAdmin: "admin/",
    company: "compania",
    baseRegister: "/registro",

    //CAMBIOS FLUJO
    basicRegisterWithEmail: "correo",
    contact: "contacto",
    suscriptions: "suscripciones/",
    suscription: "suscripcion",
    firstLogin: "inicio",
    test: "prueba",
    question: "duda",
    changePassword: "contrasena/recuperar",
    complement: "/correo/complemento",
    benefits: "beneficios",
    edit: "/editar",
    user: "usuario",

    //LEADS
    lead: "lead",

    //PROMOS
    basePromo: "promocion/",
    apart: "apartado",
    apply: "aplicada",
    checkPromo: "oferta",
    validatePromo: "validatePromotion",

    resetPassword: "resetPassword",

    getExpenseTokens: "gastoToken",

    //ROLES
    roles: "roles",
    detailRole: "detalleRol",
    createRole: "altaRol",
    updateRole: "editarRol",
    deleteRole: "eliminarRol",
    permits: "listarPermisosCompania",

    //USUARIOS
    getUsers: "listarUsers",
    createUser: "altaUser",
    updateUser: "editarUser",
    deleteUser: "inhabilitarUser",

    purchaseOrders: "ordenesCompra",

    //ESTRUCTURA
    getStructureOfCompany: "/traerJerarquia/",
    createStructureOfCompany: "/altaJerarquia",
    updateStructureOfCompany: "/editarJerarquia",
    deleteStructureOfCompany: "/eliminarJerarquia",

    //FACTURACIÓN
    invoices: "invoice",
    requestInvoice: "solicitarFactura",

    packageOfTokens: "bolsasToken",

    //RESERVATION
    autocomplete: "destinationsAutocomplete",
    getHotels: "searchHotel",
    getHotelDetail: "selectHotel",
    reserve: "reservas/habitaciones",
    payHotel: "pago/tokens",
    cancelReservation: "cancellationRequest",

    //JERARQUIAS
    hierarchies: "hierarchies",

    requestTransfer: "/solicitarTransferencia",
    payTransfer: "/cargartransferencia",

    updateRFC: "updateRfc",
    politics: "polities",
    useNoktos: "spendToken",
    useNoktosByFather: "policieSpendTokenByFather",
    checkIfIsAuthorized: "thereIsAuthorizer",
    authorizationRequest: "authorizationRequest",
    authorizationResponse: "authorizationResponse",
    getInfoAboutNoktosRequest: "authorizationUserVerification",

    statementAccountDocument: "statementAccount",
    getInfoOfCompanyAndReservationToModify: 'reservation/rates/balance/',
    modificationCost: 'modification/cost',
};
