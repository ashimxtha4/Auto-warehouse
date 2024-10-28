export const api = {
  // auth
  auth: {
    login: {
      post: '/auth/login'
    },
    register: {
      post: '/auth/sign_up'
    }
  },
  // vehicle
  vehicle: {
    make: {
      get: '/vehicle_brand',
      post: '/general/vehicle_brand_list'
    },
    model: {
      get: '/vehicle_model',
      post: '/general/vehicle_model_list'
    },
    group: {
      get: '/vehicle_group'
    },
    body: {
      get: '/vehicle_body',
      post: '/general/vehicle_type_list'
    },
    year: {
      get: '/vehicle_year'
    },
    series: {
      get: '/vehicle_series',
      post: '/general/vehicle_series_list'
    }
  },
  products: {
    list: {
      get: '/general/product_list'
    },
    product: {
      get: (id: number) => `/general/product_details/${id}`
    }
  }
}
