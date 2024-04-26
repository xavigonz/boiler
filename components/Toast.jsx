import { Toast, VStack, ToastTitle, ToastDescription } from '@gluestack-ui/themed'

export default ({title, message}) => {

  return ({
    placement: "top",
    render: ({ id }) => {
      const toastId = "toast-" + id
      return (
        <Toast nativeID={toastId} action="attention" variant="solid">
          <VStack space="xs">
            <ToastTitle>{title}</ToastTitle>
            <ToastDescription>{message}</ToastDescription>
          </VStack>
        </Toast>
      )
    }
  })
}
  