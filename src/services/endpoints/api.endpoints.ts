export const api = {
  // auth
  customer: {
    login: {
      post: '/customer/login'
    },
    register: {
      post: '/customer/register',
      verify: {
        post: '/customer/register/verify'
      }
    },
    forgotPassword: {
      post: '/customer/forgot_password'
    },
    resetPassword: {
      get: '/customer/reset_password'
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
      get: '/vehicle_group',
      post: '/general/vehicle_position_list'
    },
    body: {
      get: '/vehicle_body',
      post: '/general/vehicle_type_list'
    },
    year: {
      get: '/vehicle_year',
      post: '/general/vehicle_year_list'
    },
    series: {
      get: '/vehicle_series',
      post: '/general/vehicle_series_list'
    }
  },
  products: {
    // list: {
    //   get: (
    //     keyword?: string,
    //     brand?: number,
    //     type?: string,
    //     model?: number[],
    //     position?: number,
    //     series?: number,
    //     page?: number,
    //     specific?: string
    //   ) => {
    //     let url = '/general/product_list'
    //     const params = new URLSearchParams()

    //     if (keyword) params.append('keyword', keyword)
    //     if (specific) params.append('specific', specific)
    //     if (brand) params.append('brand', brand.toString())
    //     if (type) params.append('type', type)
    //     if (model) params.append('model', model.toString())
    //     if (position) params.append('position', position.toString())
    //     if (series) params.append('series', series.toString())
    //     if (page) params.append('page', page.toString())

    //     const queryString = params.toString()
    //     if (queryString) {
    //       url += `?${queryString}`
    //     }

    //     return url
    //   }
    // },
    list: {
      post: '/general/product_list'
    },
    product: {
      get: (id: number) => `/general/product_details/${id}`
    }
  },
  // cart
  cart: {
    post: '/general/product/add_to_cart',
    get: (uid: string, customer_id: number) =>
      `/general/product/cart_list?uid=${uid}&customer_id=${customer_id}`,
    delete: '/general/product/removeProduct',
    checkout: {
      post: '/general/product/checkout'
    }
  },
  // order
  order: {
    post: '/general/product/orders'
  },
  // quote
  quote: {
    post: '/general/get_quote'
  },
  // sidebar
  sidebar: {
    post: '/general/product/sidebar'
  }
}
