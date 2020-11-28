import { fetchJSON } from "../utils/utils";

const API_URL = "https://api.mercadolibre.com/";

export class MELI {
  constructor() {}

  static async searchProduct(title, filters = {}) {
    let endPoint = `sites/MLA/search?q=${title}`;

    if (filters && filters.hasOwnProperty("sort")) {
      endPoint = endPoint + `&sort=${filters.sort}`;
    }

    if (filters && filters.hasOwnProperty("itemNew")) {
      if (filters.itemNew === true) {
        endPoint = endPoint + `&ITEM_CONDITION=${2230284}`;
      } else {
        endPoint = endPoint + `&ITEM_CONDITION=${2230581}`;
      }
    }

    if (filters && filters.hasOwnProperty("paging")) {
      if (filters.paging.hasOwnProperty("limit")) {
        if (filters.paging.limit) {
          endPoint += `&limit=${filters.paging.limit}`;
        }
      }

      if (filters.paging.hasOwnProperty("offset")) {
        if (filters.paging.offset) {
          endPoint += `&offset=${filters.paging.offset}`;
        }
      }
    }

    const response = await fetchJSON(API_URL + endPoint);

    let productos = [];
    let paging = response.paging || {};

    try {
      response.results.forEach((result) =>
        productos.push(new Producto(result))
      );
    } catch {}

    return [productos, paging];
  }

  static async getCategoryName(categoryId) {
    const endPoint = `/categories/${categoryId}`;
    const response = await fetchJSON(API_URL + endPoint);
    return response.name;
  }
}

class Producto {
  constructor(meliResult) {
    this.title = meliResult.title;
    this.price = meliResult.price;
    this.thumbnail = meliResult.thumbnail;
    this.condition = meliResult.condition;
    this.id = meliResult.id;
    this.categoryId = meliResult.category_id;
    this.stock = meliResult.available_quantity;
    this.permalink = meliResult.permalink;
    // this.category = MELI.getCategoryName(this.categoryId);
  }
}

export const producto = {
  id: "MLA884038735",
  site_id: "MLA",
  title: "Xr 250 Tornado 0km Color Rojo Y Blanco",
  seller: {
    id: 79295190,
    permalink: "http://perfil.mercadolibre.com.ar/GENAMAXSRL",
    registration_date: "2005-03-19T07:23:05.000-04:00",
    car_dealer: true,
    real_estate_agency: false,
    tags: [
      "car_dealer",
      "user_info_verified",
      "eshop",
      "mshops",
      "messages_as_seller",
      "messages_as_buyer"
    ],
    car_dealer_logo:
      "https://img.mlstatic.com/org-img/mktlogos/newAdmLogos/MOT/MLA/logo79295190.jpg",
    eshop: {
      nick_name: "GENAMAXSRL",
      eshop_rubro: null,
      eshop_id: 4551,
      eshop_locations: [],
      site_id: "MLA",
      eshop_logo_url: "http://resources.mlstatic.com/eshops/79295190.jpg",
      eshop_status_id: 2,
      seller: 79295190,
      eshop_experience: 0
    },
    seller_reputation: {
      transactions: {
        total: 29,
        canceled: 6,
        period: "historic",
        ratings: {
          negative: 0,
          positive: 1,
          neutral: 0
        },
        completed: 23
      },
      power_seller_status: null,
      metrics: {
        claims: {
          rate: 0,
          value: 0,
          period: "365 days"
        },
        delayed_handling_time: {
          rate: 0,
          value: 0,
          period: "365 days"
        },
        sales: {
          period: "365 days",
          completed: 23
        },
        cancellations: {
          rate: 0,
          value: 0,
          period: "365 days"
        }
      },
      level_id: "5_green"
    }
  },
  price: 540000,
  prices: {},
  sale_price: null,
  currency_id: "ARS",
  available_quantity: 1,
  sold_quantity: 0,
  buying_mode: "classified",
  listing_type_id: "gold_premium",
  stop_time: "2020-12-20T21:15:26.000Z",
  condition: "new",
  permalink:
    "https://moto.mercadolibre.com.ar/MLA-884038735-xr-250-tornado-0km-color-rojo-y-blanco-_JM",
  thumbnail: "http://http2.mlstatic.com/D_883432-MLA32398972347_102019-I.jpg",
  accepts_mercadopago: true,
  installments: null,
  address: {
    state_id: "TUxBUENBUGw3M2E1",
    state_name: "Capital Federal",
    city_id: "TUxBQ0NBUGZlZG1sYQ",
    city_name: "Capital Federal",
    area_code: "",
    phone1: ""
  },
  shipping: {
    free_shipping: false,
    mode: "not_specified",
    tags: [],
    logistic_type: "not_specified",
    store_pick_up: false
  },
  seller_address: {
    id: "",
    comment: "",
    address_line: "",
    zip_code: "",
    country: {
      id: "AR",
      name: "Argentina"
    },
    state: {
      id: "AR-C",
      name: "Capital Federal"
    },
    city: {
      id: "TUxBQlZFTDIwNDha",
      name: "Velez Sarsfield"
    },
    latitude: "",
    longitude: ""
  },
  seller_contact: {
    contact: "",
    other_info: "",
    area_code: "",
    phone: "",
    area_code2: "",
    phone2: "",
    email: "",
    webpage: ""
  },
  location: {
    address_line: "",
    zip_code: "",
    subneighborhood: null,
    neighborhood: {
      id: "TUxBQkZMTzg5MjFa",
      name: "Floresta"
    },
    city: {
      id: "TUxBQ0NBUGZlZG1sYQ",
      name: "Capital Federal"
    },
    state: {
      id: "TUxBUENBUGw3M2E1",
      name: "Capital Federal"
    },
    country: {
      id: "AR",
      name: "Argentina"
    },
    latitude: -34.628246,
    longitude: -58.48441
  },
  attributes: [
    {
      attribute_group_id: "",
      source: 1,
      value_id: "2230284",
      value_name: "Nuevo",
      value_struct: null,
      values: [
        {
          id: "2230284",
          name: "Nuevo",
          struct: null,
          source: 1
        }
      ],
      attribute_group_name: "",
      id: "ITEM_CONDITION",
      name: "Condición del ítem"
    },
    {
      name: "Versión",
      value_id: null,
      values: [
        {
          id: null,
          name: "XR 250",
          struct: null,
          source: 1572
        }
      ],
      attribute_group_name: "",
      source: 1572,
      id: "TRIM",
      value_name: "XR 250",
      value_struct: null,
      attribute_group_id: ""
    },
    {
      attribute_group_name: "Adicionales",
      value_id: "242084",
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
          source: 1572
        }
      ],
      attribute_group_id: "ADICIONALES",
      value_struct: null,
      source: 1572,
      id: "SINGLE_OWNER",
      name: "Único dueño",
      value_name: "No"
    },
    {
      value_id: "60559",
      value_name: "Honda",
      values: [
        {
          source: 1,
          id: "60559",
          name: "Honda",
          struct: null
        }
      ],
      attribute_group_name: "Ficha técnica",
      id: "BRAND",
      name: "Marca",
      value_struct: null,
      attribute_group_id: "FIND",
      source: 1
    },
    {
      value_struct: null,
      attribute_group_id: "FIND",
      attribute_group_name: "Ficha técnica",
      source: 1572,
      id: "ENGINE",
      name: "Motor",
      value_id: "923585",
      value_name: "4 tiempos",
      values: [
        {
          source: 1572,
          id: "923585",
          name: "4 tiempos",
          struct: null
        }
      ]
    },
    {
      id: "ENGINE_DISPLACEMENT",
      name: "Cilindrada",
      value_id: null,
      value_name: "250 cc",
      values: [
        {
          source: 1572,
          id: null,
          name: "250 cc",
          struct: {
            number: 250,
            unit: "cc"
          }
        }
      ],
      value_struct: {
        number: 250,
        unit: "cc"
      },
      attribute_group_id: "FIND",
      attribute_group_name: "Ficha técnica",
      source: 1572
    },
    {
      value_id: "378807",
      value_name: "Honda",
      value_struct: null,
      attribute_group_id: "FIND",
      source: 1572,
      name: "Marca del motor",
      values: [
        {
          id: "378807",
          name: "Honda",
          struct: null,
          source: 1572
        }
      ],
      attribute_group_name: "Ficha técnica",
      id: "ENGINE_MANUFACTURER"
    },
    {
      value_id: null,
      attribute_group_name: "Ficha técnica",
      source: 1572,
      id: "KILOMETERS",
      name: "Kilómetros",
      value_name: "0 km",
      value_struct: {
        number: 0,
        unit: "km"
      },
      values: [
        {
          id: null,
          name: "0 km",
          struct: {
            number: 0,
            unit: "km"
          },
          source: 1572
        }
      ],
      attribute_group_id: "FIND"
    },
    {
      id: "MODEL",
      name: "Modelo",
      value_struct: null,
      attribute_group_id: "FIND",
      value_id: "381198",
      value_name: "XR 250 Tornado",
      values: [
        {
          id: "381198",
          name: "XR 250 Tornado",
          struct: null,
          source: 1
        }
      ],
      attribute_group_name: "Ficha técnica",
      source: 1
    },
    {
      id: "MOTO_TYPE",
      value_id: "381237",
      value_name: "Enduro",
      value_struct: null,
      attribute_group_id: "FIND",
      name: "Tipo de moto",
      values: [
        {
          source: 1,
          id: "381237",
          name: "Enduro",
          struct: null
        }
      ],
      attribute_group_name: "Ficha técnica",
      source: 1
    },
    {
      value_id: null,
      value_struct: null,
      values: [
        {
          source: 1572,
          id: null,
          name: "2020",
          struct: null
        }
      ],
      attribute_group_id: "FIND",
      attribute_group_name: "Ficha técnica",
      source: 1572,
      id: "VEHICLE_YEAR",
      name: "Año",
      value_name: "2020"
    }
  ],
  original_price: null,
  category_id: "MLA1763",
  official_store_id: null,
  domain_id: "MLA-MOTORCYCLES",
  catalog_product_id: null,
  tags: [
    "brand_verified",
    "dragged_visits",
    "good_quality_picture",
    "immediate_payment"
  ],
  order_backend: 2
};
