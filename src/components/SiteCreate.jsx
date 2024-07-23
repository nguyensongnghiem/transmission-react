import React from 'react';
import {Box, Button, Checkbox, Group, TextInput} from '@mantine/core';
import { useForm } from '@mantine/form';
function SiteCreate() {
        const form = useForm({
            mode: 'uncontrolled',
            initialValues: {
                email: '',
                termsOfService: false,
            },

            validate: {
                email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            },
        });

        return (
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <Box maw={500} mx='auto'>


                <TextInput
                    withAsterisk
                    label="Site ID"
                    placeholder="Site Id"
                    key={form.key('siteId')}
                    {...form.getInputProps('siteId')}
                />

                <TextInput
                    withAsterisk
                    label="Site Id khác"
                    placeholder="Site Id khác"
                    key={form.key('siteId2')}
                    {...form.getInputProps('siteId')}
                />

                <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    key={form.key('termsOfService')}
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                />

                <Group mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
                </Box>
            </form>
        );
}

export default SiteCreate;