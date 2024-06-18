# InvestEngine Test Assignment

![InvestEngine screenshot](/public/Screenshot.png)

## Card Component

Since reusability and compoundability were focal points of the assignment, I've decided to go with the **Compound Component** pattern

```ts
 <Card>
    <Card.Title>
    <Card.Description>
    <Card.Image />
    <Card.Action/>
  </Card>
```

### Pros

#### Flexibility

**Compound Components** offer greater flexibility. We might omit certain elements if we don't want them in the specific card. The existence of the image is a matter of adding it as a child. This markup is viable:

```js
<Card>
    <Card.Title>
    <Card.Description>
</Card>
```

We can also change the order of the items with little trouble. Although some additional CSS rules might be considered:

```js
<Card>
    <Card.Description>
    <Card.Title>
</Card>
```

**Card.Title** renders a heading element. It has two props: level and size. It's important to preserve the semantincs of the headings, so we might wanna use h2-h4 depending on the context. The size property is independent from the semantics of the heading level. Defaults are: h2 and 32px.

#### How to extend the functionality

It's possible to extend the existing functionality by adding a new component as a compound.

```js
function NewCompound = () => {
return <div>Hi</div>
}

Card.NewCompound = NewCompound
```

#### Full Typescript Support

Typescript offers nice support for compound components.

![Autocomplete](/public/Compound-autocomplete.png)

One other benefit is that compounds are treated as a regular HTML elements.**Card.Image** acts like a regular image, with all the attributes available for an **img** element.
**Card.Action** is treated as **button** or as **a** depending on the **as** prop.

#### Card variants

There are currently two variants of the Card: **fulltint** and **stripe-accent**. The color is an additional prop to the component that changes either the tint or the color of the decorative stripe. The current functionality allows the stripe color to be other than 'blue' (which might be desirable), but it is somewhat restricted by TypeScript.

```js
type CardVariants =
  | {
      variant: 'fulltint',
      color: 'blue' | 'magenta',
    }
  | {
      variant: 'stripe-accent',
      color: 'blue',
    };
```

#### How to add Card variants

There are several ways to achieve this. If there's going to be an established reusable variant, it might be a good idea to add a color variation to the CSS stylesheet. We might have some granular control of the variations by changing different custom properties.

```css
.card[data-color='green'] {
  --card-bg-color: green;
}

.card[data-variant='stripe-accent'][data-color='green'] {
  --card-shadow-color: green;
  --card-shadow-opacity: 0.15;
}
```

If there's a one-off variant that is required to be in one specific place and not going to be reused anywhere else, it might be more convenient to add the variant through the style attribute:

```js
<Card
  variant="fulltint"
  color="magenta"
  style={{
    '--card-bg-color': 'yellow',
    '--card-text-color': 'black',
  }}
>
  {children}
</Card>
```

#### On Accessibility of the Actions

One other way was to wrap the whole card in the link or button element.

```js
<a>
  <Card>
    <Card.Title>Portfolios built for you</Card.Title>
    <Card.Description>
      Fill in our simple questionaire, and our investment managers will build
      and manage a low-cost portfolio that suits you
    </Card.Description>
  </Card>
</a>
```

This type of markup is read by a screen reader something like this: "Portfolios built for you. Fill in our simple questionnaire, and our investment managers will build and manage a low-cost portfolio that suits you. **Link**". It might be extremely verbose and confusion for those relying on screen readers.
So I've decided to use a fully opaque absolutely positioned button or link that covers the card.

```js
<Card>
  <Card.Title>Portfolios built for you</Card.Title>
  <Card.Description />
  <Card.Action as="link">Portolios built for you</Card.Action>
</Card>
```

A few caveats: it's a little bit more repetitive from the DX perspective as we have to duplicate the title to provide the action with an accessible name. One other thing is that the text of the card is not selectable. It's probably not a big deal since the text is probably going to be available for selection on the page that link leads to. I believe this approach overall offers a better user experience.

### Layouts

I've added reusable and configurable **Center** and **Cluster** layouts. They might seem a little bit daunting, but the use case is very straightforward. The sizing properties also have good TypeScript support, which might be further customized. Currently, sizing properties accept most of the native CSS values and any custom properties.

```ts
type CSSLength =
  | number
  | `${number}${'px' | 'ch' | 'pt' | 'cm' | 'in' | 'em' | 'rem' | ''}`
  | `var(--${string})`;
```

If there's an established design system in the project, we might change the type to be something like this:

```ts
type CSSLength = .... | `var(--space-${number})`
```
