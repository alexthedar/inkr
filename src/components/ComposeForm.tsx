import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ContentItem } from '../types/content';

// FIX: Rewritten validation schema to be more robust and correct.
const contentSchema = yup.object().shape({
  type: yup.string().oneOf(['micro', 'post', 'article']).required(),
  text: yup
    .string()
    .required('Content is required.')
    .when('type', {
      is: 'micro',
      then: schema => schema.max(250, 'Microblogs must be 250 characters or less.'),
    })
    .when('type', {
      is: 'post',
      // Uses a more robust word-counting method
      then: schema =>
        schema.test(
          'wordCount',
          'Posts must be 250 words or less.',
          (value = '') => (value.match(/\S+/g)?.length || 0) <= 250
        ),
    })
    .when('type', {
      is: 'article',
      then: schema =>
        schema.test(
          'wordCount',
          'Articles must be 750 words or less.',
          (value = '') => (value.match(/\S+/g)?.length || 0) <= 750
        ),
    }),
});

interface ComposeFormProps {
  onSubmit: (data: Pick<ContentItem, 'type' | 'text'>) => void;
  initialValues?: ContentItem;
}

export default function ComposeForm({ onSubmit, initialValues }: ComposeFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Pick<ContentItem, 'type' | 'text'>>({
    resolver: yupResolver(contentSchema),
    defaultValues: {
      type: initialValues?.type ?? 'micro',
      text: initialValues?.text ?? '',
    },
  });

  const type = watch('type');

  return (
    <View style={styles.container}>
      {/* This would ideally be a segmented control */}
      <View style={styles.segmentContainer}>
        <Button
          title="Micro"
          onPress={() => setValue('type', 'micro')}
          disabled={type === 'micro'}
        />
        <Button title="Post" onPress={() => setValue('type', 'post')} disabled={type === 'post'} />
        <Button
          title="Article"
          onPress={() => setValue('type', 'article')}
          disabled={type === 'article'}
        />
      </View>

      <Controller
        control={control}
        name="text"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline
            placeholder={
              type === 'micro'
                ? "What's happening?"
                : type === 'post'
                  ? 'Write your post...'
                  : 'Tell your story...'
            }
          />
        )}
      />
      {errors.text && <Text style={styles.errorText}>{errors.text.message}</Text>}

      <Button title={initialValues ? 'Update' : 'Create'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
  },
  segmentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
});
