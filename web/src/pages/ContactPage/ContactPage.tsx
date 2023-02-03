import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  useForm,
  FormError,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onTouched' })

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Success')
      formMethods.reset()
    },
    onError: () => {
      toast.error('Error')
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />

      <Form onSubmit={onSubmit} formMethods={formMethods}>
        <FormError error={error} wrapperClassName="form-error" />

        <Label htmlFor="name" errorClassName="error" name="name">
          Name
        </Label>
        <TextField
          validation={{ required: true }}
          errorClassName="error"
          name="name"
        />
        <FieldError name="name" className="error" />

        <Label htmlFor="email" errorClassName="error" name="email">
          Email
        </Label>
        <TextField
          validation={{ required: true }}
          errorClassName="error"
          name="email"
        />
        <FieldError name="email" className="error" />

        <Label htmlFor="message" name="message">
          Message
        </Label>
        <TextAreaField
          validation={{ required: true }}
          errorClassName="error"
          name="message"
        />
        <FieldError name="message" className="error" />

        <Submit disabled={loading}>Send message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
