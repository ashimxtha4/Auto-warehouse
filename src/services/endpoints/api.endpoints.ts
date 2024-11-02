export const api = {
  // auth
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
  },
  // #region admin
  admin: {
    login: {
      post: '/login'
    },
    customer: {
      quote: {
        list: {
          get: '/admin/customer/quotes'
        },
        detail: {
          get: (id: number) => `/admin/customer/quotes/${id}`
        },
        reply: {
          post: '/admin/customer/quote_reply'
        }
      },
      orders: {
        product: {
          get: '/admin/customer/orders'
        },
        dispatch: {
          post: '/admin/customer/orders/dispatch'
        },
        status: {
          post: '/admin/customer/orders/change_status'
        }
      }
    },
    product: {
      add: {
        post: '/product'
      },
      list: {
        get: (page: number) => `/product?page=${page}`
      },
      import: {
        post: '/product/import'
      }
    },
    glassType: {
      list: {
        get: '/glasstype'
      },
      add: {
        post: '/glasstype'
      }
    },
    vehicle: {
      make: {
        create: {
          post: '/vehicle_brand'
        },
        list: {
          get: (page: number) => `/vehicle_brand?page=${page}`
        }
      },
      // body
      type: {
        create: {
          post: '/vehicle_type'
        },
        list: {
          get: '/vehicle_type'
        }
      },
      position: {
        create: {
          post: '/vehicle_position'
        },
        list: {
          get: '/vehicle_position'
        }
      },
      model: {
        create: {
          post: '/vehicle_model'
        },
        list: {
          get: '/vehicle_model'
        }
      },
      series: {
        create: {
          post: '/vehicle_series'
        },
        list: {
          get: '/vehicle_series'
        }
      }
    }
  }
}
