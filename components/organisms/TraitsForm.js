/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar, TextField } from "@mui/material";
import { useEffect } from "react";

const TraitInput = ({ variant, label, value, setTrait }) => {
  if (variant === "boost-percentage")
    return (
      <TextField
        label={`${label} - (${variant})`}
        value={value}
        onChange={(e) => setTrait(label)(e.target.value)}
        error={
          value && (isNaN(value) || Number(value) > 100 || Number(value) < 0)
        }
        helperText={
          value && (isNaN(value) || Number(value) > 100 || Number(value) < 0)
            ? "Boost percentage attributes must be less than 100 and bigger than 0"
            : ""
        }
        fullWidth
        autoComplete="off"
        name={label}
      />
    );

  if (variant === "string") {
    return (
      <TextField
        label={`${label} - (${variant})`}
        value={value}
        onChange={(e) => setTrait(label)(e.target.value)}
        fullWidth
        autoComplete="off"
        name={label}
      />
    );
  }

  return (
    <TextField
      label={`${label} - (${variant})`}
      value={value}
      onChange={(e) => setTrait(label)(e.target.value)}
      error={value && isNaN(value)}
      helperText={value && isNaN(value) ? "Must be number" : ""}
      fullWidth
      autoComplete="off"
      name={label}
    />
  );
};

const TraitsForm = ({ collection, traits, setTraits }) => {
  useEffect(() => {
    setTraits(
      collection.traits.map((trait) => ({
        trait_type: trait.name,
        display_type: trait.variant,
        value: "",
      }))
    );
  }, [collection]);

  const setTrait = (trait_type) => (value) => {
    const nT = [...traits];

    setTraits(
      nT.map((trait) => {
        if (trait.trait_type === trait_type) {
          return {
            trait_type: trait.trait_type,
            display_type: trait.display_type,
            value,
          };
        } else {
          return trait;
        }
      })
    );
  };

  if (collection.traits.length == 0) {
    return (
      <Typography variant="body1">
        This collection have no attributed setted. If you want you can add
        attributes in the collection setting
      </Typography>
    );
  }
  return (
    <div>
      {traits.map((trait, i) => (
        <div
          css={css`
            margin-bottom: 0.75em;
          `}
          key={trait._id}
        >
          <TraitInput
            label={trait.trait_type}
            variant={trait.display_type}
            value={trait.value}
            setTrait={setTrait}
          />
        </div>
      ))}
    </div>
  );
};
export default TraitsForm;
