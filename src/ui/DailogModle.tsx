import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Icard, MyModalProps } from "../interfaces/interface";
import Input from "./Input";

export default function MyModal({
  isOpen,
  closeModal,
  title,
  children,
}: MyModalProps) {
  const [product, setProduct] = useState<Icard>({
    productImage: "",
    productname: "",
    description: "",
    price: "",
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {/* Modal Title */}
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                )}

                {/* Input Fields */}
                <div className="mt-2 flex flex-col space-y-4">
                  <Input
                    id="product-name"
                    label="Product name:"
                    placeholder="Write your product name here"
                    value={product.productname}
                    onChange={e =>
                      setProduct({ ...product, productname: e.target.value })
                    }
                  />
                  <Input
                    id="product-image"
                    label="Product Image URL:"
                    placeholder="Paste your product image URL here"
                    value={product.productImage}
                    onChange={e =>
                      setProduct({ ...product, productImage: e.target.value })
                    }/>
                  <Input
                    id="description"
                    label="Description:"
                    placeholder="Write your description here"
                    value={product.description}
                    onChange={e =>
                      setProduct({ ...product, description: e.target.value })
                    }
                  />
                  <Input
                    id="price"
                    label="Price:"
                    placeholder="Write your price here"
                    value={product.price}
                    onChange={e =>
                      setProduct({ ...product, price: e.target.value })
                    }
                  />
                </div>

                {/* Modal Actions */}
                <div className="mt-4 flex space-x-1">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
