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
  customer: {
    login: {
      post: '/customer/login'
    },
    register: {
      post: '/customer/register'
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
      post: '/general/product_list'
    },
    product: {
      get: (id: number) => `/general/product_details/${id}`
    }
  },
  cart: {
    post: '/general/product/add_to_cart',
    get: (uid: string, customer_id: number) =>
      `/general/product/cart_list?uid=${uid}&customer_id=${customer_id}`,
    delete: '/general/product/removeProduct',
    checkout: {
      post: '/general/product/checkout'
    }
  }
}
