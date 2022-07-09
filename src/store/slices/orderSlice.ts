import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FileArray = {
  file: File;
  objectUrl: string;
};

type Product = {
  id: string;
  imageLink: string;
  description: string;
  price: number;
  quantity?: string;
  reason?: string;
  action?: string;
  comment?: string;
  photos?: FileArray[];
  images?: string[];
}

interface UpdatePayload {
  id: string;
  field: "quantity" | "reason" | "comment" | "action";
  value: string;
}

interface AddPhotoPayload {
  id: string;
  file: File;
  objectUrl: string;
  uuid: string;
}

interface RemovePhotoPayload {
  id: string;
  filename: string;
  uuid: string;
}

interface AddressPayload {
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  municipio: string;
  uf: string;
  complemento?: string;
  descricao: string;
  uuid: string;
  principal: boolean;
}

type CommentPayload = string;

type SetOrderIdPayload = string;

export interface OrderState {
  comment?: string;
  endereco: AddressPayload;
  products: {
    [id: string]: Product
  };
  pedidoId?: string;
  valorTotal: number;
}

const initialState: OrderState = {
  comment: "",
  endereco: {
    bairro: "",
    cep: "",
    descricao: "",
    logradouro: "",
    municipio: "",
    numero: "",
    uf: "",
    uuid: "",
    complemento: "",
    principal: false,
  },
  products: {},
  pedidoId: null,
  valorTotal: 0,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products[action.payload.id] = action.payload;
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      delete state.products[action.payload.id];

      state.valorTotal = 0;

      for (const [key, item] of Object.entries(state.products)) {
        state.valorTotal += item.price * Number(item.quantity);
      }
    },
    resetOrder: (state) => {
      state.products = {};
    },
    updateField: (state, action: PayloadAction<UpdatePayload>) => {
      state.products[action.payload.id] = { ...state.products[action.payload.id], [action.payload.field]: action.payload.value }

      if (action.payload.field === "quantity") {
        state.valorTotal = 0;

        for (const [key, item] of Object.entries(state.products)) {
          state.valorTotal += item.price * Number(item.quantity);
        }
      }
    },
    setOrderId: (state, action: PayloadAction<SetOrderIdPayload>) => {
      state.pedidoId = action.payload;
    },
    addPhoto: (state, action: PayloadAction<AddPhotoPayload>) => {
      if (!state.products[action.payload.id].photos) state.products[action.payload.id].photos = [];
      if (!state.products[action.payload.id].images) state.products[action.payload.id].images = [];

      state.products[action.payload.id].photos.push({ file: action.payload.file, objectUrl: action.payload.objectUrl });
      state.products[action.payload.id].images.push(action.payload.uuid);
    },
    removePhoto: (state, action: PayloadAction<RemovePhotoPayload>) => {
      state.products[action.payload.id].photos = state.products[action.payload.id].photos.filter(photo => photo.objectUrl !== action.payload.filename);
      state.products[action.payload.id].images = state.products[action.payload.id].images.filter(image => image !== action.payload.uuid);
    },
    setOrderAddress: (state, action: PayloadAction<AddressPayload>) => {
      state.endereco = action.payload;
    },
    setComment: (state, action: PayloadAction<CommentPayload>) => {
      state.comment = action.payload;
    }
  },
})

export const { addProduct, removeProduct, resetOrder, updateField, setOrderId, addPhoto, removePhoto, setOrderAddress, setComment } = orderSlice.actions

export default orderSlice.reducer