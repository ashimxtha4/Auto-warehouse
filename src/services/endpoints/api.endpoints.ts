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
      get: '/vehicle_group',
      post: '/general/vehicle_position_list'
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
      get: (
        keyword?: string,
        brand?: number,
        type?: number,
        model?: number,
        position?: number,
        series?: number
      ) => {
        let url = '/general/product_list'
        const params = new URLSearchParams()

        if (keyword) params.append('keyword', keyword)
        if (brand) params.append('brand', brand.toString())
        if (type) params.append('type', type.toString())
        if (model) params.append('model', model.toString())
        if (position) params.append('position', position.toString())
        if (series) params.append('series', series.toString())

        const queryString = params.toString()
        if (queryString) {
          url += `?${queryString}`
        }

        return url
      }
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
  }
}
